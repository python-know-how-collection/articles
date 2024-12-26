# SikuliX 環境構築

## [SikuliX とは](http://sikulix.com/#home1)

SikuliXとは、画像マッチング技術を利用したオープンソースのGUIオートメーションツールです。
OpenCV（インテルが開発・公開したオープンソースの画像解析ライブラリ）という画像マッチング技術を使って、操作対象を画像としてマッチングするため、スクリーン上に表示されているものであればアプリケーションの種類を問わず操作することができるのが特徴です。

[![SikuliX](img/sikulix-red-small.png)](http://sikulix.com/)
http://sikulix.com/

## [サポート言語](http://sikulix.com/#home1)

SikuliXは下記のスクリプト言語をサポートしています。
- Python language level 2.7 (supported by Jython)
- running RobotFramework text-scripts is supported (see docs)
- Ruby language level 1.9 and 2.0 (supported by JRuby)
- JavaScript (supported by the Java Scripting Engine)

## [サポートOS](http://sikulix.com/quickstart/#qs1)

SikuliX は下記の OS をサポートしています。  
公式サイトにはサポートの記載はありませんが、Windows 11 でも動作します。

- Windows XP, 7, 8 and 10 (development on Windows 10)
- Mac OSX 10.10 and later (development on macOS 10.15)
- Linux/Unix systems depending on the availability of the prerequisites

## SikuliX 環境構築

Windows 11 での環境構築手順を説明します。

1. OpenJDK をダウンロードし解凍後、任意の場所へ配置する

    1. Java 8の有効な64ビット OpenJDK をダウンロードする
    
        例） OpenJDK 21  
        https://jdk.java.net/archive/  
        openjdk-21.0.2_windows-x64_bin.zip
        
    2. zipファイルを解凍し、任意の場所へ配置する
        
        例） C:¥jdk-21.0.2

2. SikuliX IDE をダウンロードし任意の場所へ配置する
    
    1. SikuliX IDE をダウンロードする
    
        https://raiman.github.io/SikuliX1/downloads.html  
        例） Version 2.0.5 (latest stable version)  
        
    2. 任意の場所へ配置する
    
        例） C:¥sikulix¥sikulixide-2.0.5.jar
    
3. コマンドプロンプトを開き SikuliX IDE を起動する

    SET コマンドではそのセッションでのみ有効な環境変数を設定します
    
    ```bash
    SET JAVA_HOME=C:\jdk-21.0.2\bin
    SET PATH=%JAVA_HOME%;%PATH%
    java -jar "C:¥sikulix¥sikulixide-2.0.5.jar"
    ```
    
- バッチファイルを作成すればダブルクリックで SikuliX IDE を起動できる
    
    パスは環境に合わせて変更してください
    
    例）Desktop に sikulix.bat を作成する
    
    - sikulix.bat の内容
    
        ```bash
        @echo off
        SET JAVA_HOME=C:\jdk-21.0.2\bin
        SET PATH=%JAVA_HOME%;%PATH%
        java -jar "C:¥sikulix¥sikulixide-2.0.5.jar"
        ```
