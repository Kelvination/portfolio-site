#!/bin/bash

# Deploy portfolio to VPS
# Usage: ./deploy-to-vps.sh [user@host]

set -e

VPS_HOST=${1:-"ubuntu@54.158.240.191"}
LOCAL_BUILD_DIR="./dist"
REMOTE_DIR="/var/www/portfolio"

echo "🚀 Deploying portfolio to VPS..."

# Build the project
echo "📦 Building portfolio..."
pnpm build

# Create remote directory if it doesn't exist
echo "📁 Creating remote directory..."
ssh $VPS_HOST "sudo mkdir -p $REMOTE_DIR && sudo chown -R \$USER:www-data $REMOTE_DIR"

# Upload files
echo "📤 Uploading files..."
rsync -avz --delete $LOCAL_BUILD_DIR/ $VPS_HOST:$REMOTE_DIR/

# Set proper permissions
echo "🔐 Setting permissions..."
ssh $VPS_HOST "sudo chown -R www-data:www-data $REMOTE_DIR && sudo chmod -R 755 $REMOTE_DIR"

echo "✅ Portfolio deployed successfully!"
echo "🌐 Your site should be live at: https://kelvinnewton.com"