#!/bin/zsh

cd "$(dirname "$0")/frontend"

if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

echo "Starting frontend on http://localhost:1313 ..."
echo "  Press Ctrl+C to stop.\n"

npm run dev
