#include "cmdline.h"
#include "InputGeom.h"
#include "Sample_SoloMesh.h"

int main(int argc, char** argv) {

	std::cout << "begin\n";
	cmdline::parser p = cmdline::parser();
	// 网格参数
	p.add<float>("cellSize", 's', "网格单元大小(voxel size)", false, 0.3f);  // 体素大小，影响导航网格的精度
	p.add<float>("cellHeight", 'e', "网格单元高度", false, 0.2f);  // 体素高度
	p.add<float>("agentHeight", 'h', "寻路体高度", false, 2.0f);  // 寻路代理的高度
	p.add<float>("agentRadius", 'r', "寻路体半径", false, 7.5f);  // 寻路代理的半径
	p.add<float>("agentMaxClimb", 'c', "寻路体最大攀爬高度", false, 0.9f);  // 代理能攀爬的最大高度
	p.add<float>("agentMaxSlope", 'l', "寻路体最大坡度(角度)", false, 45.0f);  // 代理能行走的最大坡度角度

	// 区域参数
	p.add<float>("regionMinSize", 'g', "最小区域大小", false, 8.0f);  // 可行走区域的最小尺寸
	p.add<float>("regionMergeSize", 'n', "区域合并大小", false, 20.0f);  // 小区域合并的阈值

	// 多边形参数
	p.add<float>("edgeMaxLen", 'd', "多边形边最大长度", false, 12.0f);  // 多边形边的最大长度
	p.add<float>("edgeMaxError", 'a', "多边形边最大误差", false, 1.3f);  // 允许的简化误差
	p.add<float>("vertsPerPoly", 'v', "每个多边形顶点数", false, 6.0f);  // 每个多边形的最大顶点数

	// 细节网格参数
	p.add<float>("detailSampleDist", 't', "细节采样距离", false, 6.0f);  // 生成细节网格的采样距离
	p.add<float>("detailSampleMaxError", 'p', "细节采样最大误差", false, 1.0f);  // 细节网格的最大误差

	// 分割类型
	p.add<int>("partitionType", 'y', "分割类型(0:watershed, 1:monotone, 2:layers)", false, 0);  // 网格分割算法类型

	// 输入输出文件
	p.add<std::string>("in", 'i', "输入文件名(.obj)", true, "");  // 输入的3D模型文件(.obj格式)
	p.add<std::string>("out", 'o', "输出文件名(.bin)", false, "");  // 输出的导航网格文件(.bin格式)
	p.parse_check(argc, argv);


	BuildContext ctx;
	InputGeom geom;
	BuildSettings settings;

	std::string input_filename = p.get<std::string>("in");
	std::string output_filename = p.get<std::string>("out");
	if (output_filename.empty()) {
		size_t pos = input_filename.size();
		output_filename = input_filename.substr(0, pos - 4) + ".bin";
	}

	
	if (!geom.load(&ctx, input_filename))
	{
		std::cout<<"Failed to load file "<< input_filename<< "\n";
		return -1;
	}
	memset(&settings, 0, sizeof(settings));
	settings.cellSize = p.get<float>("cellSize");
	settings.cellHeight = p.get<float>("cellHeight");
	settings.agentHeight = p.get<float>("agentHeight");
	settings.agentRadius = p.get<float>("agentRadius");
	settings.agentMaxClimb = p.get<float>("agentMaxClimb");
	settings.agentMaxSlope =  p.get<float>("agentMaxSlope");
	settings.regionMinSize = p.get<float>("regionMinSize");
	settings.regionMergeSize = p.get<float>("regionMergeSize");
	settings.edgeMaxLen =  p.get<float>("edgeMaxLen");
	settings.edgeMaxError = p.get<float>("edgeMaxError");
	settings.vertsPerPoly = p.get<float>("vertsPerPoly");
	settings.detailSampleDist = p.get<float>("detailSampleDist");
	settings.detailSampleMaxError = p.get<float>("detailSampleMaxError");
	settings.partitionType = p.get<int>("partitionType");
	Sample_SoloMesh build;

	build.setContext(&ctx);
	build.setGeomSet(&settings);
	build.handleMeshChanged(&geom);

	if (!build.handleBuild())
	{
		std::cout << "Failed to build.\n";
		return -1;
	}

	build.saveAll(output_filename.c_str(), build.getNavMesh());
	std::cout << "save end\n";
}

