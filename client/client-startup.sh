#! /bin/bash
sudo apt update
sudo apt -y upgrade
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt-get install nodejs -y
sudo apt install npm -y
sudo apt install git -y
cd /
sudo mkdir code
cd code
git clone https://github.com/BU-Spark/se-oasis.git
cd se-oasis/client
rm package-lock.json
npm install
export HOST=0.0.0.0
export PORT=8085
export SERVER_PROTOCOL=http
export SERVER_HOST=34.132.142.209
export SERVER_PORT=5675
node ./src/utils/firebaseHelper.js
cp firebaseConfig.json ./src/config/
sudo apt install nginx -y
cd /etc/nginx/sites-enabled/
sudo rm default
cd /etc/nginx/sites-available/
sudo rm default
sudo touch default
echo "server {
    listen 8085;
    server_name 0.0.0.0;
    root /var/www/se-oasis/client/build;
    index index.html index.htm;
    try_files $uri /index.html;
    # Static files
    location /files/ {
        autoindex on;
        root /var/www/se-oasis/client/build/static;
    }
}" > default
cd /etc/nginx/sites-available/
sudo rm /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
sudo ufw allow 8085
sudo ufw allow 'Nginx Full'
sudo systemctl daemon-reload
sudo systemctl start nginx
sudo systemctl daemon-reload
sudo systemctl restart nginx
sudo systemctl enable nginx