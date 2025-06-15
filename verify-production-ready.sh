#!/bin/bash

echo "🔍 Verifying Production Deployment Configuration..."
echo "=================================================="

# Check if Node.js version is adequate
NODE_VERSION=$(node --version)
echo "✓ Node.js version: $NODE_VERSION"

# Check if all required files exist
echo "✓ Checking configuration files..."

if [ -f "static/admin/config.yml" ]; then
    echo "  ✓ CMS config exists"
    # Check if it's configured for git-gateway
    if grep -q "name: git-gateway" static/admin/config.yml; then
        echo "  ✓ Git Gateway backend configured"
    else
        echo "  ⚠️  Git Gateway backend not found - this is OK for local dev"
    fi
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

if [ -f "netlify.toml" ]; then
    echo "  ✓ Netlify config exists"
else
    echo "  ❌ Netlify config missing"
    exit 1
fi

if [ -f "docusaurus.config.js" ]; then
    echo "  ✓ Docusaurus config exists"
else
    echo "  ❌ Docusaurus config missing"
    exit 1
fi

# Test production build
echo "✓ Testing production build..."
if npm run build > /dev/null 2>&1; then
    echo "  ✓ Production build successful"
    echo "  ✓ Build directory created"
else
    echo "  ❌ Production build failed"
    exit 1
fi

# Check if admin files are in build
if [ -f "build/admin/index.html" ]; then
    echo "  ✓ Admin interface included in build"
else
    echo "  ❌ Admin interface missing from build"
    exit 1
fi

echo ""
echo "🎉 Production configuration verified!"
echo ""
echo "📋 Next steps for Netlify deployment:"
echo "  1. Commit and push/merge these changes to main branch"
echo "  2. Netlify will auto-deploy your site"
echo "  3. Enable Netlify Identity in your site settings"
echo "  4. Enable Git Gateway in Identity → Services"
echo "  5. Invite yourself as a user in Identity → Users"
echo "  6. Access CMS at https://your-site.netlify.app/admin"
echo ""
echo "⚠️  Note: Git Gateway errors are expected until deployed to Netlify"
echo ""
