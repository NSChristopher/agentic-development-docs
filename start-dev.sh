#!/bin/bash

# Start development servers for Docusaurus + Decap CMS
echo "Starting Agentic Development Docs with CMS..."
echo "=========================================="

# Function to cleanup on exit
cleanup() {
    echo "Stopping servers..."
    jobs -p | xargs -r kill
    exit
}

# Setup trap for cleanup
trap cleanup SIGINT SIGTERM

# Start CMS proxy server in background
echo "Starting CMS proxy server on port 8081..."
npm run cms-proxy &
CMS_PID=$!

# Wait a moment for CMS proxy to start
sleep 2

# Start Docusaurus dev server
echo "Starting Docusaurus dev server on port 3000..."
echo ""
echo "🚀 Access the site at: http://localhost:3000/agentic-development-docs/"
echo "📝 Access the CMS at: http://localhost:3000/agentic-development-docs/admin/"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

npm start

# This will run when npm start exits
cleanup