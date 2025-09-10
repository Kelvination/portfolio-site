# VPS Deployment Guide for Multiple Projects

## 🚀 Quick Deployment

### Deploy Portfolio (One Command)
```bash
./deploy-to-vps.sh ubuntu@54.158.240.191
```

## 📋 Manual VPS Setup Commands

Run these commands on your VPS (SSH in with `ssh ubuntu@54.158.240.191`):

### 1. Update Nginx Configuration
```bash
# Backup current config
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup

# Upload new config (run this from your local machine)
scp nginx-config.conf ubuntu@54.158.240.191:/tmp/

# Apply new config on VPS
sudo cp /tmp/nginx-config.conf /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl reload nginx
```

### 2. Set Up Directory Structure
```bash
# Create directories for all projects
sudo mkdir -p /var/www/portfolio
sudo mkdir -p /var/www/quartoclone
sudo mkdir -p /var/www/projects

# Set proper ownership
sudo chown -R ubuntu:www-data /var/www/
sudo chmod -R 755 /var/www/
```

### 3. Deploy Portfolio
```bash
# This is handled by the deploy-to-vps.sh script, but manually:
# 1. Build locally: pnpm build
# 2. Upload: rsync -avz --delete ./dist/ ubuntu@54.158.240.191:/var/www/portfolio/
# 3. Set permissions: sudo chown -R www-data:www-data /var/www/portfolio
```

## 🔧 Adding New Side Projects

### For Static Sites (React, Vue, etc.)

1. **Build your project locally**
   ```bash
   npm run build  # or pnpm build, yarn build
   ```

2. **Update project's Vite/Webpack config**
   ```javascript
   // vite.config.js
   export default defineConfig({
     base: '/projects/YOUR_PROJECT_NAME/',
     // ... other config
   })
   ```

3. **Upload to VPS**
   ```bash
   # Create directory
   ssh ubuntu@54.158.240.191 "sudo mkdir -p /var/www/YOUR_PROJECT_NAME"
   
   # Upload files
   rsync -avz --delete ./dist/ ubuntu@54.158.240.191:/var/www/YOUR_PROJECT_NAME/
   
   # Set permissions
   ssh ubuntu@54.158.240.191 "sudo chown -R www-data:www-data /var/www/YOUR_PROJECT_NAME"
   ```

4. **Add to Nginx config**
   ```nginx
   # Add this block to /etc/nginx/sites-available/default
   location /projects/YOUR_PROJECT_NAME/ {
       alias /var/www/YOUR_PROJECT_NAME/;
       index index.html;
       try_files $uri $uri/ /projects/YOUR_PROJECT_NAME/index.html;
   }
   ```

5. **Reload Nginx**
   ```bash
   sudo nginx -t && sudo systemctl reload nginx
   ```

### For Full-Stack Projects (with Backend)

1. **Deploy frontend** (same as above)

2. **Deploy backend**
   ```bash
   # Upload backend code
   rsync -avz --delete ./server/ ubuntu@54.158.240.191:/home/ubuntu/YOUR_PROJECT_NAME-server/
   
   # Install dependencies and start
   ssh ubuntu@54.158.240.191 "cd /home/ubuntu/YOUR_PROJECT_NAME-server && npm install && pm2 start index.js --name YOUR_PROJECT_NAME"
   ```

3. **Add API proxy to Nginx**
   ```nginx
   # Add this block to nginx config
   location /api/YOUR_PROJECT_NAME/ {
       rewrite ^/api/YOUR_PROJECT_NAME/?(.*) /$1 break;
       proxy_pass http://localhost:YOUR_PORT;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection "upgrade";
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
   }
   ```

## 🔄 Project URLs Structure

- **Portfolio**: `https://kelvinnewton.com/`
- **QuartoClone**: `https://kelvinnewton.com/projects/quartoclone/`
- **Future Projects**: `https://kelvinnewton.com/projects/PROJECT_NAME/`
- **APIs**: `https://kelvinnewton.com/api/PROJECT_NAME/`

## 📝 Directory Structure on VPS

```
/var/www/
├── portfolio/          # Your main portfolio (root site)
├── quartoclone/        # QuartoClone game files
└── PROJECT_NAME/       # Future project files

/home/ubuntu/
├── PROJECT_NAME-server/    # Backend servers
└── quartoclone-server/     # QuartoClone backend (existing)
```

## 🛠 Common Commands

```bash
# Check nginx status
sudo systemctl status nginx

# Test nginx config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# View nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check PM2 processes
pm2 list

# Restart PM2 process
pm2 restart PROCESS_NAME

# Check disk space
df -h

# Check running processes
ps aux | grep node
```

## 🚨 Troubleshooting

1. **502 Bad Gateway**: Backend server is down
   ```bash
   pm2 list
   pm2 restart YOUR_PROJECT_NAME
   ```

2. **404 Not Found**: Check file paths and nginx config
   ```bash
   ls -la /var/www/PROJECT_NAME/
   sudo nginx -t
   ```

3. **Permission Denied**: Fix file permissions
   ```bash
   sudo chown -R www-data:www-data /var/www/PROJECT_NAME/
   sudo chmod -R 755 /var/www/PROJECT_NAME/
   ```