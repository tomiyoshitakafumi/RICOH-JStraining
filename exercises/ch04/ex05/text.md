﻿```javascript
for (i = 1; i < 101; i++)
    console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
```

`(i % 3 ? "" : "Fizz")`でi%3で余りが0以外の場合は空文字、0の場合はFizz
`(i % 5 ? "" : "Buzz")`でi%5で余りが0以外の場合は空文字、0の場合はBuzz
`(i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz")`が空文字(false)の場合は論理和演算子(||)の右のオペランドが評価されるためiの数値が表記される。
ここで論理和演算子の左辺が空文字ではない(true)場合、iは評価されないため表示されない。