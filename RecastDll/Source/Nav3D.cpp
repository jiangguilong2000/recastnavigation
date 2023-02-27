#include "DetourNavMesh.h"
#include "jni.h"
#include "DetourNavMeshQuery.h"
#include <cstring>
#include <unordered_map>
#include "DetourCommon.h"
#include <iostream>
#include <exception>
#include <string>
#include <cstdint>
#include <map>
#include "io_gamioo_path_Nav3D.h"
#include "Util.h"
#include "Nav3D.h"
#include <sstream>
using namespace std;
static const int NAVMESHSET_MAGIC = 'M' << 24 | 'S' << 16 | 'E' << 8 | 'T'; //'MSET';
static const int NAVMESHSET_VERSION = 1;
static const float extents[3] = {1.0f,1.0f,1.0f};
static const float raycastExtents[3] = { 0.0f,1.0f,0.0f };


int32_t InitNav(const char* buffer, int32_t n, dtNavMesh*& navMesh)
{
	int index = 0;
	// Read header.
	NavMeshSetHeader header;

	int count = sizeof(NavMeshSetHeader);
	if (index + count > n)
	{
		return -1;
	}
	memcpy(&header, buffer + index, count);
	index += count;

	if (header.magic != NAVMESHSET_MAGIC)
	{
		return -2;
	}
	if (header.version != NAVMESHSET_VERSION)
	{
		return -3;
	}

	dtNavMesh* mesh = dtAllocNavMesh();
	if (!mesh)
	{
		return -4;
	}
	dtStatus status = mesh->init(&header.params);
	if (dtStatusFailed(status))
	{
		return -5;
	}

	// Read tiles.
	for (int i = 0; i < header.numTiles; ++i)
	{
		NavMeshTileHeader tileHeader;

		count = sizeof(NavMeshTileHeader);
		if (index + count > n)
		{
			return -6;
		}
		memcpy(&tileHeader, buffer + index, count);
		index += count;

		if (!tileHeader.tileRef || !tileHeader.dataSize)
			break;

		unsigned char* data = (unsigned char*)dtAlloc(tileHeader.dataSize, DT_ALLOC_PERM);
		if (!data) break;
		memset(data, 0, tileHeader.dataSize);

		count = tileHeader.dataSize;
		if (index + count > n)
		{
			return -7;
		}
		memcpy(data, buffer + index, count);
		index += count;

		mesh->addTile(data, tileHeader.dataSize, DT_TILE_FREE_DATA, tileHeader.tileRef, 0);
	}
	navMesh = mesh;
	return 0;
}

static const int MAX_POLYS = 256;
static const int MAX_SMOOTH = 2048;

class NavMeshContex
{
public:
	dtNavMesh* navMesh;
	dtNavMeshQuery* navQuery;


	int32_t Init(const char* buffer, int32_t n)
	{
		int32_t ret = InitNav(buffer, n, navMesh);
		std::string s;

		if (ret != 0)
		{
			return -1;
		}

		navQuery = new dtNavMeshQuery();
		navQuery->init(navMesh, 2048);
		return 0;
	}

	~NavMeshContex()
	{
		if (navQuery != nullptr)
		{
			dtFreeNavMeshQuery(navQuery);
		}
		if (navMesh != nullptr)
		{
			dtFreeNavMesh(navMesh);
		}
	}

	std::string toString() {
		
		std::stringstream ss;
		ss << "NavMeshContex[" << static_cast<const void*>(this) << "]";
		return ss.str();
	}

};

NavMesh* NavMesh::instance = nullptr;

NavMesh::NavMesh()
{
}

NavMesh* NavMesh::GetInstace()
{
	if (NavMesh::instance == nullptr)
	{
		NavMesh::instance = new NavMesh();
	}
	return NavMesh::instance;
}

NavMeshContex* NavMesh::New(int32_t id, const char* buffer, int32_t n)
{
	NavMeshContex* navMeshContex = new NavMeshContex();
	int32_t ret = navMeshContex->Init(buffer, n);

	if (ret != 0)
	{
		delete navMeshContex;
		return nullptr;
	}
	navMeshContexs[id] = navMeshContex;
	return navMeshContex;
}

NavMeshContex* NavMesh::Get(int32_t id)
{
	const auto it = navMeshContexs.find(id);

	if (it != navMeshContexs.end())
	{
		return it->second;
	}
	return nullptr;
}

void NavMesh::Clear()
{
	for (auto kv : navMeshContexs)
	{
		delete kv.second;
	}
	navMeshContexs.clear();
}

void NavMesh::Remove(int32_t id)
{
	const auto it = navMeshContexs.find(id);
	if (it != navMeshContexs.end())
	{
		NavMeshContex* navMesh = it->second;
		navMeshContexs.erase(it);
		delete navMesh;
	}
}

const char* NavMesh::Version()
{
	return  ""+ NAVMESHSET_VERSION;
}


/**
 * 加载地图
 *
 * @param id 寻路数据地图ID
 * @param content   地图文件的路径例
 * @param length    数据长度
 * @return navmeshId, 为0或负数表示加载失败，为正数表示加载成功，后续寻路时传入此id为参数
 */
JNIEXPORT jint JNICALL Java_io_gamioo_path_Nav3D_load(JNIEnv* env, jobject jobj, jint id, jbyteArray content, jint length)
{
	char* buffer = Util::ConvertJByteaArrayToChars(env, content);
	NavMeshContex*  context=NavMesh::GetInstace()->New(id, buffer, length);
	delete buffer;
	if (context== nullptr) {
		return -1;
	}
	else {
		return id;
	}
}

NavMeshContex* RecastGet(int32_t id)
{
	return NavMesh::GetInstace()->Get(id);
}


/**
 * 寻路
 *
 * @param navmeshId 寻路数据地图ID
 * @param startX    起始点X
 * @param startY    起始点Y
 * @param endX      结束点X
 * @param endY      结束点Y
 * @return 返回路径点列表，注意，查找不到时，会返回空
 */

JNIEXPORT  jfloatArray JNICALL Java_io_gamioo_path_Nav3D_find(JNIEnv* env, jobject jobj, jint id, jfloat startX, jfloat startY, jfloat startZ, jfloat endX, jfloat endY, jfloat endZ)
{
	jfloatArray ret= NULL;
	float straightPath[MAX_POLYS * 3];
	float startPos[3] = {startX ,startY,startZ };
	float endPos[3] = {endX ,endY,endZ };

	dtPolyRef startRef = 0;
	dtPolyRef endRef = 0;
	float startNearestPt[3];
	float endNearestPt[3];

	dtQueryFilter filter;
	filter.setIncludeFlags(0xffff);
	filter.setExcludeFlags(0);
	NavMeshContex* navMeshContex =RecastGet(id);
	if (navMeshContex==nullptr)
	{
		return ret;
	}
	//cout << navMeshContex->toString()<<endl;
	int dtStatus =navMeshContex->navQuery->findNearestPoly(startPos, extents, &filter, &startRef, startNearestPt);
	if ((dtStatus & DT_SUCCESS) == 0)
	{
		return ret;
	}

	dtStatus =navMeshContex->navQuery->findNearestPoly(endPos, extents, &filter, &endRef, endNearestPt);
	if ((dtStatus & DT_SUCCESS) == 0)
	{
		return ret;
	}
	dtPolyRef polys[MAX_POLYS];
	int npolys;
	unsigned char straightPathFlags[MAX_POLYS];
	dtPolyRef straightPathPolys[MAX_POLYS];
	int nstraightPath = 0;

	dtStatus=navMeshContex->navQuery->findPath(startRef, endRef, startNearestPt, endNearestPt, &filter, polys, &npolys, MAX_POLYS);
	if ((dtStatus & DT_SUCCESS) == 0)
	{
		return ret;
	}
	//printf("npolys: %d\n", npolys);
	if (npolys)
	{
		float epos1[3];
		dtVcopy(epos1, endNearestPt);

		if (polys[npolys - 1] != endRef)
		{
			dtStatus=navMeshContex->navQuery->closestPointOnPoly(polys[npolys - 1], endNearestPt, epos1, 0);
			if ((dtStatus & DT_SUCCESS) == 0)
			{
				return ret;
			}
		}
		dtStatus = navMeshContex->navQuery-> findStraightPath(startNearestPt, endNearestPt, polys, npolys, straightPath, straightPathFlags, straightPathPolys, &nstraightPath, MAX_POLYS, 0);
		if ((dtStatus & DT_SUCCESS) == 0)
		{
			return ret;
		}
		ret= Util::ConvertFloatStarToJfloatArray(env, straightPath,nstraightPath * 3);
	}

	return ret;
}


/**
 * 光线照射发，寻找可以支线通过的hit点，如果可通过则返回hit
 *
 * @param navmeshId 寻路数据地图ID
 * @param startX    起始点X
 * @param startY    起始点Y
 * @param endX      结束点X
 * @param endY      结束点Y
 * @return 返回射线射过去遇到的第一个阻挡点，如果到终点都没有阻挡，返回终点
 */
JNIEXPORT  jfloatArray JNICALL Java_io_gamioo_path_Nav3D_raycast(JNIEnv* env, jobject jobj, jint id, jfloat startX, jfloat startY, jfloat startZ, jfloat endX, jfloat endY, jfloat endZ)
{
	jfloatArray ret = NULL;
	float hitPoint[3];
	float startPos[3] = { startX ,startY,startZ };
	float endPos[3] = { endX ,endY,endZ };
	dtPolyRef startRef = 0;
	dtPolyRef endRef = 0;
	float startNearestPt[3];
	//float endNearestPt[3];

	dtQueryFilter filter;
	filter.setIncludeFlags(0xffff);
	filter.setExcludeFlags(0);
	NavMeshContex* navMeshContex = RecastGet(id);
	if (navMeshContex == nullptr)
	{
		return ret;
	}
	//cout << navMeshContex->toString() << endl;
	int dtStatus = navMeshContex->navQuery->findNearestPoly(startPos, raycastExtents, &filter, &startRef, startNearestPt);
	if ((dtStatus & DT_SUCCESS) == 0)
	{
		return ret;
	}
	// dtStatus = navMeshContex->navQuery->findNearestPoly(endPos, raycastExtents, &filter, &endRef, endNearestPt);
	// if ((dtStatus & DT_SUCCESS) == 0)
	// {
	//	 return ret;
	// }
	dtPolyRef polys[MAX_POLYS];
	int npolys;
	int nstraightPath = 0;
	float t = 0;
	float hitNormal[3];
	memset(hitNormal, 0, sizeof(hitNormal));
	//printf("version: %d\n", 3);
	 dtStatus = navMeshContex->navQuery->raycast(startRef, startNearestPt, endPos, &filter, &t, hitNormal, polys, &npolys, MAX_POLYS);
	 if ((dtStatus & DT_SUCCESS) == 0)
	 {
		 return ret;
	 }
	// printf("endPos: %f\n", t);
	if (t > 1) {
		// no hit;
		ret = Util::ConvertFloatStarToJfloatArray(env, endPos, 3);
		return ret;
	}
	else {
		
		// hit
		hitPoint[0] = startPos[0] + (endPos[0] - startPos[0]) * t;
		hitPoint[1] = startPos[1] + (endPos[1] - startPos[1]) * t;
		hitPoint[2] = startPos[2] + (endPos[2] - startPos[2]) * t;
	//	printf("hitPoint: %f,%f,%f\n", hitPoint[0], hitPoint[1], hitPoint[2]);
	//	printf("npolys: %d\n", npolys);
		ret = Util::ConvertFloatStarToJfloatArray(env, hitPoint, 3);
		//if (npolys) {
		//	float h = 0;
		//	dtStatus = navMeshContex->navQuery->getPolyHeight(polys[npolys - 1], hitPoint, &h);
		//	if ((dtStatus & DT_SUCCESS) == 0)
		//	{
		//		return ret;
		//	}
		//	hitPoint[1] = h;
		//	ret = Util::ConvertFloatStarToJfloatArray(env, hitPoint, 3);
		//}
	}
	return ret;
}

/**
 * 找到目标点最近的静态可达点
 *
 * @param navmeshId 寻路数据地图ID
 * @param pointX    参考点X
 * @param pointY    参考点Y
 * @return 如果目标点可达，返回目标点即可， 如果搜索范围内没有，返回空
 */
JNIEXPORT jfloatArray JNICALL Java_io_gamioo_path_Nav3D_findNearest(JNIEnv* env, jobject jobj, jint id, jfloat pointX, jfloat pointY,jfloat pointZ)
{
	jfloatArray ret = NULL;
	float nearestPos[3]={0.0f};
	float startPos[3] = { pointX ,pointY,pointZ };
	dtPolyRef startRef = 0;
	dtQueryFilter filter;
	filter.setIncludeFlags(0xffff);
	filter.setExcludeFlags(0);
	NavMeshContex* navMeshContex = RecastGet(id);
	if (navMeshContex == nullptr)
	{
		return ret;
	}
	int dtStatus = navMeshContex->navQuery->findNearestPoly(startPos, extents, &filter, &startRef, nearestPos);
	if ((dtStatus & DT_SUCCESS) == 0)
	{
		return ret;
	}
	if (nearestPos[0]*10000==0&& nearestPos[1] * 10000 == 0 && nearestPos[2] * 10000 == 0) {
	//	printf("nearestPos: %f %f %f\n", nearestPos[0], nearestPos[1], nearestPos[2]);

		return ret;
	}
	
	ret = Util::ConvertFloatStarToJfloatArray(env, nearestPos, 3);
	return ret;
}


/**
 * 释放加载的地图数据
 *
 * @param navmeshId 寻路数据地图ID
 */
JNIEXPORT void JNICALL Java_io_gamioo_path_Nav3D_release(JNIEnv* env, jobject jobj, jint id)
{
	NavMesh::GetInstace()->Remove(id);
}

/**
 * 释放加载的所有地图数据
 */
JNIEXPORT void JNICALL Java_io_gamioo_path_Nav3D_releaseAll(JNIEnv* env, jobject jobj)
{
	NavMesh::GetInstace()->Clear();
}
