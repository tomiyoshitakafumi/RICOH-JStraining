﻿参考

* https://qiita.com/bon127/items/491b25e90208188dafbd
* https://bottoms-programming.com/archives/zero-width-joiner-emoji-form.html
  "𠮷野家"[0]
  '\uD842'

JavaScriptではutf-16のエンコードが使われている。
しかし"𠮷"はutf-16のエンコードに含まれてないサロゲートペア文字である。
そのため配列の先頭を取得すると"𠮷"ではなくコードユニットの先頭が出力される。
(なお、"𠮷野家"[1]とすると\uDFB7と2つめのコードユニットが出力される)
が出力される。
"👨‍👨‍👧‍👧"[0]
'\uD83D'

この絵文字は['👨', '‍', '👨', '‍', '👧', '‍', '👧']の4人をゼロ幅接合で繋げた絵文字になっている。
コードユニットを見ると['\uD83D', '\uDC68', '\uD83D', '\uDC68', '\uD83D', '\uDC67', '\uD83D', '\uDC67']
となっており先頭を取得すると\uD83D'となる。