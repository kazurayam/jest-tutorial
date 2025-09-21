// 500ms経過後にcallback関数を発火させる。
// その時 "peanut butter" という文字列を引数として渡す
const fetchDataCallback = (callback: (str: string) => void) => {
    const timer = setTimeout(() => callback('peanut butter'), 500)
    // https://nazomikan.hateblo.jp/entry/2013/05/04/184424
    timer.unref()
}

export default fetchDataCallback

// https://zenn.dev/296u/articles/7175641f1c4492
