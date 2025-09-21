import fetchData from './fetchData'

test('the data is peanut butter', () => {
    const callback = (str: string) => {
        expect(str).toBe('peanut butter')
    }
    fetchData(callback)
})
