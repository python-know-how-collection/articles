# Bandit

## Bandit 使用方法（Pythonコードセキュリティチェックツール）

`Bandit` は、Pythonコードのセキュリティリスクを解析するツールです。

## インストール

以下のコマンドでインストールできます。

```bash
pip install bandit
```

## 使用例

1. 単一ファイルのセキュリティチェック

    ```bash
    bandit my_script.py
    ```

2. ディレクトリ内の全ファイルをチェック

    ```bash
    bandit -r my_project/
    ```
