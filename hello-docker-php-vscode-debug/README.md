
# 環境
- Docker Toolbox on Windows

# 参考
https://qiita.com/TakamiChie/items/9e53e1a3e180c5c8c88f

# ブレークポイントで止まるまでの流れ
- docker-compose up で立ち上げる。
- VSCode のデバッガを起動する。
- html/index.php にブレークポイントを置く。
- そのブレークポイントの箇所を通るように、ブラウザ等でアクセスする。
- ブレークポイントで止まる。

# Docker コンテナ内から見た Windows のポートの調べ方
- VirtualBox のアプリからターミナルを起動
- ip r の一番上の行のIPアドレス
