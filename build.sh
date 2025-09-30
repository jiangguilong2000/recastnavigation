#!/bin/bash

# 删除build目录（如果存在）
if [ -d "build" ]; then
    rm -rf build
fi
# 创建新的build目录
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
