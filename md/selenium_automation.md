# Selenium を用いた Web 操作自動化

## [Selenium とは](https://www.selenium.dev/ja/documentation/overview/)

Selenium は、Web ブラウザを自動化するためのツールです。
その力で何をするかは完全にあなた次第です。
主にテスト目的でWebアプリケーションを自動化するためのものですが、それに限定されるものではありません。

退屈なWebベースの管理タスクも自動化できます（自動化する必要があります）。

[![Selenium](./img/selenium_logo_small.png)](https://selenium.dev)

https://selenium.dev

## Selenium 環境構築
[Selenium 環境構築](./selenium_install.html)を参考に Python 環境を構築してください。

## Selenium のサンプルプログラム

Selenium を用いて Google で検索を行うサンプルプログラムです。
任意のファイルを付け保存してください。
ブラウザは Chrome を使用します。

```python
# -*- coding: utf-8 -*-
import time
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://www.google.com/')
time.sleep(5)
search_box = driver.find_element_by_name("q")
search_box.send_keys('Selenium')
search_box.submit()
time.sleep(5)
driver.quit()
```

## Selenium のサンプルプログラムの実行

作成したサンプルプログラムを実行します。

```bash
python selenium_sample.py
```
