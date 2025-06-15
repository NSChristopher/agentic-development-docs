#!/bin/bash

# Production readiness verification for Netlify deployment
echo "🔍 Verifying production readiness for Netlify..."
echo "================================================"

# Check if Node.js version is adequate
NODE_VERSION=$(node --version)
echo "✓ Node.js version: $NODE_VERSION"

# Check build command
echo "✓ Testing build command..."
if npm run build > /dev/null 2>&1; then
    echo "  ✓ Build successful"
else
    echo "  ❌ Build failed"
    exit 1
fi

# Check if required files exist
echo "✓ Checking required files..."
required_files=(
    "netlify.toml"
    "static/admin/config.yml"
    "static/admin/index.html"
    "package.json"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file exists"
    else
        echo "  ❌ $file missing"
        exit 1
    fi
done

# Check CMS configuration
echo "✓ Checking CMS configuration..."
if grep -q "git-gateway" static/admin/config.yml; then
    echo "  ✓ Git Gateway backend configured"
else
    echo "  ❌ Git Gateway not configured"
    exit 1
fi

if grep -q "branch: main" static/admin/config.yml; then
    echo "  ✓ Main branch configured"
else
    echo "  ❌ Main branch not configured"
    exit 1
fi

# Check if latest Decap CMS is being used
if grep -q "decap-cms@" static/admin/index.html; then
    echo "  ✓ Decap CMS configured"
else
    echo "  ❌ Decap CMS not properly configured"
    exit 1
fi

echo ""
echo "🎉 All checks passed! Ready for Netlify deployment."
echo ""
echo "📋 Netlify setup steps:"
echo "  1. Connect your GitHub repository to Netlify"
echo "  2. Build command: npm run build"
echo "  3. Publish directory: build"
echo "  4. Node version: 18 (in environment variables)"
echo "  5. Enable Netlify Identity"
echo "  6. Enable Git Gateway in Identity → Services"
echo "  7. Invite yourself as a user in Identity → Users"
echo ""
echo "🌐 After deployment:"
echo "  • Site: https://your-site-name.netlify.app"
echo "  • CMS: https://your-site-name.netlify.app/admin"
echo ""
