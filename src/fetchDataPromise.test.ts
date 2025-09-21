// https://zenn.dev/296u/articles/7175641f1c4492 の「Promise」を参照

import fetchDataPromise from './fetchDataPromise'

test('the data is expected to be "peanut bugger"', () => {
    expect.assertions(1)
    return fetchDataPromise().then(str => {
        expect(str).toBe('peanut butter')
    }).catch(str => {
        expect(str).toBe('error')
    })
})
