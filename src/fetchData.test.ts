// https://zenn.dev/296u/articles/7175641f1c4492 の「Promise」を参照

import fetchData, { fetchDataReject } from './fetchData'
//import fetchData from './fetchData'

test('the data is expected to be "peanut bugger"', () => {
    expect.assertions(1)
    return fetchData().then(str => {
        expect(str).toBe('peanut butter')
    }).catch(str => {
        expect(str).toBe('error')
    })
})

test('using the .resolves matcher', () => {
    return expect(fetchData()).resolves.toBe('peanut butter')
})


test('using the .rejects matcher', () => {
    return expect(fetchDataReject()).rejects.toBe('error')
})

