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
git clone https://github.com/BU-Spark/se-oasis.git
cd se-oasis/server
rm package-lock.json
npm install
export SERVER_HOST=0.0.0.0
export SERVER_PORT=8085
touch server.service
echo "[Unit]
Description= Serve Oasis server
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=~/se-oasis/server/
Environment="PATH=~/se-oasis/server/node_modules"
ExecStart=npm run prod

[Install]
WantedBy=multi-user.target" > server.service
sudo chown root:root server.service
sudo cp server.service /etc/systemd/system/server.service
sudo chown root:root ~/se-oasis/server
sudo systemctl stop server
sudo systemctl daemon-reload
sudo systemctl start server
systemctl daemon-reload
sudo systemctl restart server
sudo systemctl enable server


