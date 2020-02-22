
docker-compose -p docker-node-mysql up
docker-compose down
docker-compose build --no-cache

# Windows での確認（Docker Toolbox）
# IPアドレスは docker-machine ip で表示されたもの
nc -w 1 -v 192.168.99.100 3306

# Mac での確認（Docker for Mac）
nc -w 1 -v localhost 3306

# Developing
cd ~/Projects/docker-node-mysql
docker-compose up

# Deploy to Heroku
cd ~/Projects/docker-node-mysql/application
heroku login
heroku container:login
heroku container:push web -a sttaf34-docker-node-mysql
heroku container:release web -a sttaf34-docker-node-mysql

heroku logs -a sttaf34-docker-node-mysql
