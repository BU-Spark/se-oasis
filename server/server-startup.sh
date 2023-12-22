#! /bin/bash
sudo apt update
sudo apt -y upgrade
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt-get install nodejs -y
sudo apt install git -y
cd /home/ubuntu
sudo git clone https://github.com/BU-Spark/se-oasis.git
cd se-oasis/server
sudo rm package-lock.json
sudo npm install
export SERVER_HOST=0.0.0.0
export SERVER_PORT=5675
sudo ufw allow 5675
sudo npm install pm2 -g
pm2 start npm --name "oasis-server" -- run prod
pm2 save
pm2 startup


