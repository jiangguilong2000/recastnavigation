#include "cmdline.h"
#include "InputGeom.h"
#include "Sample_SoloMesh.h"

int main(int argc, char** argv) {

	std::cout << "begin"<< std::endl;
	cmdline::parser p = cmdline::parser();
	p.add<float>("cellSize", 's', "cellSize", false, 0.3f);
	p.add<float>("cellHeight", 'e', "cellHeight", false, 0.2f);
	p.add<float>("agentHeight", 'h', "agentHeight", false, 2.0f);
	p.add<float>("agentRadius", 'r', "agentRadius", false, 7.5f);
	p.add<float>("agentMaxClimb", 'c', "agentMaxClimb", false, 0.9f);
	p.add<float>("agentMaxSlope", 'l', "agentMaxSlope", false, 45.0f);
	p.add<float>("regionMinSize", 'g', "regionMinSize", false, 8.0f);
	p.add<float>("regionMergeSize", 'n', "regionMergeSize", false, 20.0f);
	p.add<float>("edgeMaxLen", 'd', "edgeMaxLen", false, 12.0f);
	p.add<float>("edgeMaxError", 'a', "edgeMaxError", false, 1.3f);
	p.add<float>("vertsPerPoly", 'v', "vertsPerPoly", false, 6.0f);
	p.add<float>("detailSampleDist", 't', "detailSampleDist", false, 6.0f);
	p.add<float>("detailSampleMaxError", 'p', "detailSampleMaxError", false, 1.0f);
	p.add<int>("partitionType", 'y', "partitionType", false, 0);

	p.add<std::string>("in", 'i', "input filename", true, "");
	p.add<std::string>("out", 'o', "output filename", false, "");
	p.parse_check(argc, argv);

	BuildContext ctx;
	InputGeom geom;
	BuildSettings settings;

	std::string input_filename = p.get<std::string>("in");
	std::string output_filename = p.get<std::string>("out");
	if (output_filename == "") {
		size_t pos = input_filename.size();
		output_filename = input_filename.substr(0, pos - 4) + ".bin";
	}

	
	if (!geom.load(&ctx, input_filename))
	{
		std::cout<<"Failed to load file "<< input_filename<< std::endl;
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
	std::cout << "save end" << std::endl;
}

