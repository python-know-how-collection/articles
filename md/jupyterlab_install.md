# Jupyter Lab 環境構築

## Jupyter Lab とは

Jupyter Labはオープンソースで開発されているデータ分析、可視化、機械学習などに広く利用されているツールです。  
Webアプリケーションとして提供されており、Webブラウザ上で各種プログラムの実行と結果の参照、ドキュメント作成などが行えます。

## Jupyter Lab のインストールと起動

1. Jupyter Lab のインストール

    pydataenvという名前の仮想環境を作成して、pip コマンドで jupyterlab をインストールします。
    
    ```bash
    python3 -m venv pydataenv
    source pydataenv/bin/activate
    (pydataenv) pip install jupyterlab==3.4.3
    ```

2. Jupyter Lab の起動
    
    PowerShell or ターミナルから Jupyter Lab を起動します。
    
    ```bash
    (pydataenv) jupyter lab
    (中略)
    [I 2022-06-11 12:01:34.333 LabApp] Build is up to date
    ```

    デフォルトでは8888番ポートで実行されるので、
    ```bash
    http://localhost:8888/lab
    ```
    
    がWebブラウザで開きます。  
    ポート番号を変更したい場合は --portオプションを指定してください。
    
    ```bash
    (pydataenv) jupyter lab --port=8080
    ```
