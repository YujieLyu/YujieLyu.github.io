#!/bin/zsh

# Start both frontend and backend dev servers
cd "$(dirname "$0")"

cleanup() {
    echo "\nShutting down..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    wait $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}
trap cleanup INT TERM

# Start backend
echo "Starting backend on http://localhost:8000 ..."
if [ ! -d ".venv" ]; then
    echo "Creating Python virtual environment..."
    uv venv --python 3.13 .venv
    source .venv/bin/activate
    uv pip install -r backend/requirements.txt
else
    source .venv/bin/activate
fi
cd backend
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!
cd ..

# Start frontend
echo "Starting frontend on http://localhost:1313 ..."
cd frontend
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi
npm run dev &
FRONTEND_PID=$!
cd ..

echo "\n  Frontend: http://localhost:1313"
echo "  Backend:  http://localhost:8000"
echo "  Press Ctrl+C to stop both servers.\n"

wait
