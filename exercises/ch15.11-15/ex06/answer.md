Q.localStorage と sessionStorage それぞれに保存されたデータの有効期限がどのように異なるか、実際に動作確認して結果を記述しなさい。
A.ブラウザと閉じて再度接続するとlocalStorageは残ったがSession Storageは消えた
しかしブラウザの復元を行うと両方残る
また別タブを開くとsession Storageは消えるがlocal Storageは残る
```