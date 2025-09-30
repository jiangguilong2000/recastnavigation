include_directories(SYSTEM Contrib)
include_directories(../DebugUtils/Include)
include_directories(../Detour/Include)
include_directories(../DetourCrowd/Include)
include_directories(../DetourTileCache/Include)
include_directories(../Recast/Include)
include_directories(Include)
include_directories(Contrib/SDL/include)

aux_source_directory(Source SRC_LIST)
add_executable (RecastCmd ${SRC_LIST})

add_dependencies(RecastCmd DebugUtils Detour DetourCrowd DetourTileCache Recast)
target_link_libraries(RecastCmd DebugUtils Detour DetourCrowd DetourTileCache Recast)

set (EXECUTABLE_OUTPUT_PATH ${CMAKE_CURRENT_BINARY_DIR})