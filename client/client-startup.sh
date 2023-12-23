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
cd /home/ubuntu/
sudo rm -r se-oasis
sudo git clone https://github.com/BU-Spark/se-oasis.git
cd se-oasis/client
sudo rm package-lock.json
sudo npm install
export HOST=0.0.0.0
export PORT=8085
export SERVER_HOST=34.132.142.209
export SERVER_PORT=5675
export SERVER_PROTOCOL=http
sudo node ./src/utils/firebaseHelper.js
sudo cp firebaseConfig.json ./src/config/
sudo npm run build
sudo apt install nginx -y
cd /etc/nginx/sites-enabled/
sudo rm default
cd /etc/nginx/sites-available/
sudo rm default
sudo touch default
sudo chmod 777 default
echo "server {
    listen 8085;
    listen [::]:8085;
    server_name 0.0.0.0;
    root /home/ubuntu/se-oasis/client/build;
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    location = /favicon.ico {
        access_log off;
        log_not_found off;
    }
}" > default
sudo chmod 611 default;
cd /etc/nginx/sites-available/
sudo rm /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
sudo ufw allow 8085
sudo ufw allow 5675
sudo ufw allow 'Nginx Full'
sudo systemctl daemon-reload
sudo systemctl start nginx
sudo systemctl daemon-reload
sudo systemctl restart nginx
sudo systemctl enable nginx