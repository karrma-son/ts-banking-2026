#!/bin/bash

fileName=$1
echo "Running ${fileName} file"
echo ""
echo ""
tsc "$1".ts && node "$1".js