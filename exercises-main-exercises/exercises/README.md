# 練習問題

## 練習問題について

- 各練習問題の解答は `chXX/exYY` 以下に作成しなさい。例えば練習問題 1.1 (1 章の 1 問目) は `c01/ex01` 以下に解答を作成しなさい。

## 絵文字について

各演習問題に付けられた絵文字の意味は以下となります:

- 🖋️: `chXX/exYY/index.md` に解答を自然言語で記述しなさい。
- 💻: `chXX/exYY` 以下にプログラムを作成しなさい (指示がなければファイル名は `index.js` または `index.ts` としなさい)。
- 🧪: `chXX/exYY` 以下にテストコードを作成しなさい (指示がなければファイル名は `index.test.js` または `index.test.ts` としなさい)。
- 📄: 与えられたテストコードを満たす実装を作成しなさい。テストコードは `chXX/exYY/index.test.js` を利用しなさい。
- 💪: のマークが付いている問題に取り組むかどうかは任意とする。

## 解答について

- 演習問題の解答テンプレート (JS, TS) を利用するかどうかは任意とする。
- 演習問題は JavaScript または TypeScript のいずれかを用いて回答しなさい。
- 演習問題の解答は GitHub のリポジトリを作成し、そこにアップロードしなさい。
- 解答リポジトリは以下のようなコマンドで解答の取得、実行できるようにしなさい。

```sh
# 回答リポジトリの clone (リポジトリ名は任意)
> git clone https://github.com/seikichi/js-exercises
> cd js-exercises

# ライブラリのインストール
> npm install

# テストケース実行 (全て)
> npm test

# 特定の演習問題 (ch01/ex05) のテストを実行
> npm test ch01/ex05

# プログラムを実行 (JS)
> node ch01/ex09/index.js

# プログラムを実行 (TS)
> npx ts-node ch01/ex09/index.ts

# プログラムを実行 (TS, Node.js >= 20)
> npx node --loader ts-node/esm ch01/ex09/index.ts
```
