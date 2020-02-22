
#
# docker-compose でやる場合
#

# docker-compose.yml を元にコンテナ起動
docker-compose up

# コンテナ停止
docker-compose up

# Windows での確認（Docker Toolbox）
# IPアドレスは docker-machine ip で表示されたもの
nc -w 1 -v 192.168.99.100 3306

# Mac での確認（Docker for Mac）
nc -w 1 -v 127.0.0.1 3306
mysql -u root -p -h 127.0.0.1 --port=3306

#
# docker-compose を使わない場合
#

# -t -> イメージの命名
# Dockerfileを元にイメージをビルド
# docker-compose を使う場合は、この工程も中でやってくれている
docker image build -t sttaf34/mysql:5.7 .

# いろいろ指定してコンテナ起動
docker container run \
  --name a_database --rm \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_DATABASE=sample \
  -p 3306:3306 sttaf34/mysql:5.7

# localhost だとつながらない
# https://hacknote.jp/archives/30781/
mysql -u root -p -h 127.0.0.1 --port=3306
