import fetchDataCallback from './fetchDataCallback'

// https://zenn.dev/296u/articles/7175641f1c4492 の「コールバック」を参照

test('the data is expected to be "peanut butter"', done => {
    const callback = (str: string) => {
        try {
            expect(str).toBe('peanut butter')
            done()
        } catch (error) {
            done(error)
        }
    }
    fetchDataCallback(callback)
})
