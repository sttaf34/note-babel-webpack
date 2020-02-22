# https://hub.docker.com/ から土台とするイメージを指定
FROM mysql:5.7

# 左 -> Dockerfileから見たファイルのパス
# 右 -> コンテナ内の絶対パス
# /docker-entrypoint-initdb.d/ に置いとくと、コンテナ起動時に実行してくれる
COPY init.sql /docker-entrypoint-initdb.d/

# コンテナ起動時のコマンド実行
CMD ["mysqld"]
