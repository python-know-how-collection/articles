# Pyreverse

## Pyreverse 使用方法（Pythonコードのクラス図自動作成ツール）

`Pyreverse` は、Pythonコードのクラス構造を解析し、クラス図を生成するツールです。

### インストール

以下のコマンドでインストールできます。

```bash
pip install pylint
```

### 使用例

1. クラス図の作成

    ```bash
    pyreverse -o png -p my_project my_script.py
    ```

    `my_project.png` という名前のクラス図が生成されます。

2. クラス関係のUML図を生成

    ```bash
    pyreverse -o dot -p my_project my_script.py
    dot -Tpng classes.dot -o classes.png
    ```
