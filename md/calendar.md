# calendar モジュール

`calendar` モジュールは、カレンダーの操作や表示を行うための標準ライブラリです。

## インストール
`calendar` モジュールは標準ライブラリのため、追加インストールは不要です。

## 使用例

1. カレンダーの表示

    ```python
    import calendar
    
    # 2024年10月のカレンダーを表示
    print(calendar.month(2024, 10))
    ```

2. うるう年の判定

    ```python
    import calendar
    
    # 2024年はうるう年か？
    print(calendar.isleap(2024))  # True
    ```
