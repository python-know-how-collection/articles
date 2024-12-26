# Selenium 環境構築

## [Selenium とは](https://www.selenium.dev/ja/documentation/overview/)

Selenium は、Web ブラウザを自動化するためのツールです。
その力で何をするかは完全にあなた次第です。
主にテスト目的でWebアプリケーションを自動化するためのものですが、それに限定されるものではありません。

退屈なWebベースの管理タスクも自動化できます（自動化する必要があります）。

[![Selenium](./img/selenium_logo_small.png)](https://selenium.dev)

https://selenium.dev

## Python 環境構築
[Python 環境構築](./python_install.html)を参考に Python 環境を構築してください。

## Selenium インストール

Python 仮想環境を作成して Selenium をインストールします。

```bash
# Python 仮想環境作成
python -m venv selenium_env
# 仮想環境有効化
source selenium_env/bin/activate
# Selenium インストール
pip install selenium
```
