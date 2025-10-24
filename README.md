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


### coverageを調べる

package.jsonの中、scriptsのところをこう書く

```
    "scripts": {
        "test": "jest --coverage"
    },
```

すなわちjestコマンドに`--coverage`を引数として与える。するとこういう表が出力される。

```
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------|---------|----------|---------|---------|-------------------
All files             |   93.33 |      100 |   81.81 |   91.66 |
 cityDatabase.ts      |   85.71 |      100 |      60 |      80 | 7,16
 fetchData.ts         |     100 |      100 |     100 |     100 |
 fetchDataCallback.ts |     100 |      100 |     100 |     100 |
 forEach.ts           |     100 |      100 |     100 |     100 |
 sum.ts               |     100 |      100 |     100 |     100 |
----------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 10 passed, 11 total
Tests:       1 skipped, 27 passed, 28 total
Snapshots:   0 total
Time:        1.555 s
Ran all test suites.
```

`cityDatabase.ts`のテストが不足していることが明確にわかる。

### console.log(message)を非表示にする

package.jsonのscriptのところをこう書く。

```
    "scripts": {
        "test": "jest --silent"
    },
```

するとjestを実行したときにテストがconsole.log(message)で出力したメッセージがコンソールに表示されなくなる。See https://jestjs.io/docs/cli#--silent

## 参考情報

[typescript環境にJestを導入する](https://qiita.com/mktu/items/d36416baba155dfecc00)

[Typescript Jest入門を進めてみる](https://zenn.dev/296u/articles/7175641f1c4492#%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF)

