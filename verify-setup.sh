#!/bin/bash

# Verification script to check if all components are properly configured
echo "🔍 Verifying Agentic Development Docs setup..."
echo "=============================================="

# Check if Node.js version is adequate
NODE_VERSION=$(node --version)
echo "✓ Node.js version: $NODE_VERSION"

# Check if required npm packages are installed
echo "✓ Checking dependencies..."
if npm list decap-server > /dev/null 2>&1; then
    echo "  ✓ decap-server installed"
else
    echo "  ❌ decap-server missing"
    exit 1
fi

if npm list concurrently > /dev/null 2>&1; then
    echo "  ✓ concurrently installed"
else
    echo "  ❌ concurrently missing"
    exit 1
fi

# Check if configuration files exist
echo "✓ Checking configuration files..."
if [ -f "static/admin/config.yml" ]; then
    echo "  ✓ CMS config exists"
else
    echo "  ❌ CMS config missing"
    exit 1
fi

if [ -f "static/admin/index.html" ]; then
    echo "  ✓ CMS admin page exists"
else
    echo "  ❌ CMS admin page missing"
    exit 1
fi

if [ -f "docusaurus.config.js" ]; then
    echo "  ✓ Docusaurus config exists"
else
    echo "  ❌ Docusaurus config missing"
    exit 1
fi

# Check if scripts are properly configured
echo "✓ Checking npm scripts..."
if npm run --silent cms-proxy --help > /dev/null 2>&1; then
    echo "  ✓ cms-proxy script configured"
else
    echo "  ❌ cms-proxy script missing"
    exit 1
fi

if npm run --silent start-with-cms --help > /dev/null 2>&1; then
    echo "  ✓ start-with-cms script configured"
else
    echo "  ❌ start-with-cms script missing"
    exit 1
fi

# Check if start-dev.sh is executable
if [ -x "start-dev.sh" ]; then
    echo "  ✓ start-dev.sh is executable"
else
    echo "  ❌ start-dev.sh is not executable"
    exit 1
fi

echo ""
echo "🎉 All checks passed! Your setup is ready."
echo ""
echo "📋 Available start options:"
echo "  • ./start-dev.sh                 (Recommended - uses existing script)"
echo "  • npm run start-with-cms         (Alternative - uses concurrently)"
echo "  • Manual: npm run cms-proxy & npm start"
echo ""
echo "🌐 Once started, access:"
echo "  • Main site: http://localhost:3000/agentic-development-docs/"
echo "  • CMS admin: http://localhost:3000/agentic-development-docs/admin/"
echo ""
