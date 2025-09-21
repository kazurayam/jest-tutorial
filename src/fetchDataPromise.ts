// https://zenn.dev/296u/articles/7175641f1c4492 の「Promise」を参照

const fetchDataPromise = () => {
    return Promise.resolve('peanut butter')
}

export const fetchDataPromiseReject = () => {
    return Promise.reject('error')
}

export default fetchDataPromise
