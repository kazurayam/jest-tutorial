// https://zenn.dev/296u/articles/7175641f1c4492 の「Promise」を参照

const fetchData = () => {
    return Promise.resolve('peanut butter')
    // return Promise.reject('error')
}

export default fetchData
