# requests モジュール

`requests` モジュールは、HTTPリクエストを簡単に扱うためのライブラリです。

## インストール

以下のコマンドでインストールできます。

```bash
pip install requests
```

## 使用例

1. Webページの取得

    ```python
    import requests
    
    response = requests.get("https://www.example.com")
    print(response.text)
    ```

2. JSON API の取得

    ```python
    import requests
    
    url = "https://jsonplaceholder.typicode.com/todos/1"
    response = requests.get(url)
    data = response.json()
    print(data)
    ```
