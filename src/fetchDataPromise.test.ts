// https://zenn.dev/296u/articles/7175641f1c4492 の「Promise」を参照

import fetchDataPromise from './fetchDataPromise'
import { fetchDataPromiseReject } from './fetchDataPromise'

test('the data is expected to be "peanut butter"', () => {
    return fetchDataPromise().then(str => {
        expect(str).toBe('peanut butter')
    })
})

test('the Promise is expected to reject', () => {
    expect.assertions(1)
    return fetchDataPromiseReject().catch(str => {
        expect(str).toBe('error')
    })
})
