#include <cstring>
#include <unordered_map>
#include <iostream>
#include <exception>
#include <string>
#include <cstdint>
#include <map>

#include <sstream>

class NavMeshContex;


class NavMesh
{
public:
	static NavMesh* instance;

	static NavMesh* GetInstace();

	std::map<int32_t, NavMeshContex*> navMeshContexs;

	NavMeshContex* New(int32_t id, const char* buffer, int32_t n);

	NavMeshContex* Get(int32_t id);

	void Clear();

	std::string Version();

	void Remove(int32_t id);

private:
	NavMesh();
};


struct NavMeshSetHeader
{
	int magic;
	int version;
	int numTiles;
	dtNavMeshParams params;
};

struct NavMeshTileHeader
{
	dtTileRef tileRef;
	int dataSize;
};