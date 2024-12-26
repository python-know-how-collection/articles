# tkinter モジュール

`tkinter` モジュールは、PythonでGUIアプリケーションを作成するための標準ライブラリです。

## インストール
`tkinter` モジュールは標準ライブラリのため、追加インストールは不要です。

## 使用例

1. ウィンドウの作成

    ```python
    import tkinter as tk
    
    root = tk.Tk()
    root.title("ウィンドウ")
    root.geometry("300x200")
    
    label = tk.Label(root, text="Hello, Tkinter!")
    label.pack()
    
    root.mainloop()
    ```
