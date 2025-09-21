// 500ms経過後にcallback関数を発火させる。
// その時 "peanut butter" という文字列を引数として渡す
const fetchData = (callback: (str: string) => void) => {
    const killTimer = setTimeout(() => callback('peanut butter'), 500)
    // https://nazomikan.hateblo.jp/entry/2013/05/04/184424
    killTimer.unref()
}

export default fetchData

// https://zenn.dev/296u/articles/7175641f1c4492
