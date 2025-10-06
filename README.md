# jest-tutorial

## このプロジェクトは何をするのか

[JEST Getting Started](https://jestjs.io/docs/getting-started)を写経する。

## 操作方法

### テストを実行する

```
$ npm test

> test
> jest --detectOpenHandles

 PASS  src/fetchData.test.ts
 PASS  src/fetchDataCallback.test.ts
 PASS  src/using-matchers.test.ts
 PASS  src/sum.test.ts

Test Suites: 4 passed, 4 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        2.579 s, estimated 3 s
Ran all test suites.
:~/github/jest-tutorial (master *)
```

## さまざまな忘備録

### fetchData

[Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)で引っかかった。サンプルコードが`fetchData()`を参照しているが、サンプルコードは`fetchData`の実装コードを明示していないので、コンパイル・エラーが発生。いろいろ試して`fetchData`を実装した。自分が`Promise`をちゃんと理解していなかったので四苦八苦した。

- [`fetchData.ts`](https://github.com/kazurayam/jest-tutorial/blob/master/src/fetchData.ts)
- [`fetchData.test.ts`](https://github.com/kazurayam/jest-tutorial/blob/master/src/fetchData.test.ts)

## 参考情報

[typescript環境にJestを導入する](https://qiita.com/mktu/items/d36416baba155dfecc00)

[Typescript Jest入門を進めてみる](https://zenn.dev/296u/articles/7175641f1c4492#%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF)

