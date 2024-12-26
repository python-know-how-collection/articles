# Python 環境構築

## Windows の場合

1. Python インストーラのダウンロード

    公式サイトよりインストーラをダウンロードします。  
    https://www.python.org/downloads/windows/

2. Python インストーラの実行
    
    ダウンロードしたインストーラを実行します。  
    インストール時に「Add Python 3.x to PATH」にチェックを入れ、  
    コマンドプロンプトから Python を実行できるようにします。

3. インストールの確認

    コマンドプロンプトを開き、以下のコマンドを実行します。
    
    ```bash
    python -V
    Python 3.XX.X
    ```
    
    バージョンが表示されればインストール成功です。

## Mac の場合

1. Python インストーラのダウンロード
  
      公式サイトよりインストーラをダウンロードします。  
      https://www.python.org/downloads/macos/
      
      - macOS 64-bit universal2 installer

2. Python インストーラの実行
    
    ダウンロードしたインストーラを実行します。  

3. インストールの確認

    ターミナルを開き、以下のコマンドを実行します。  
    ```bash
    python3 -V
    Python 3.XX.X
    ```
    バージョンが表示されればインストール成功です。

4. ルート証明書の設定
    
    SSL で macOS のルート証明書を使用するために以下のコマンドを実行します。
    （3.XX はインストールしたPythonのバージョンに置き換えてください。）
    
    ```bash
    /Applications/Python\ 3.XX/Install\ Certificates.command
    ```
