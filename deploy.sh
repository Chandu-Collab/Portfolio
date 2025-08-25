#!/bin/bash

echo "🚀 Portfolio Deployment Script"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the root directory of your portfolio project"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm run install-all

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. For GitHub Pages: Push your changes to GitHub"
    echo "   git add ."
    echo "   git commit -m \"Ready for deployment\""
    echo "   git push origin main"
    echo ""
    echo "2. For Vercel: Run 'vercel --prod' or import via dashboard"
    echo ""
    echo "📁 Build files are in: client/build/"
else
    echo "❌ Build failed! Check the errors above."
    exit 1
fi
