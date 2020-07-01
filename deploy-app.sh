#!/bin/bash

docker stop node-app
docker rm -f node-app
docker rmi -f node-app
docker build -t . node-app
docker run -d -p 4300:4300 --name node-app --network="web-app-bridge" --restart unless-stopped node-app

exit 0