// https://jestjs.io/docs/using-matchers
// Common Matchers

// the simplest test
test('two plust two is four', () => {
    expect(2 + 2).toBe(4)
})

// test object equality
test('object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({one:1, two:2})
})

// not
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0)
        }
    }
})

// Truthiness

test('null', () => {
    const n = null;
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

// Numbers

test('two plus two', () => {
    const v = 2 + 2;
    expect(v).toBeGreaterThan(3)
    expect(v).toBeGreaterThanOrEqual(3.5)
    expect(v).toBeLessThan(5)
    expect(v).toBeLessThanOrEqual(4.5)
    // toBe and toEqual are equivalent for numbers
    expect(v).toBe(4)
    expect(v).toEqual(4)
})

// floating point equality
test('adding floating point numbers', () => {
    const v = 0.1 + 0.2
    //expect(v).toBe(0.3)  // This won't work because of rounding error
    expect(v).toBeCloseTo(0.3)
})

// Strings

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
})

// Arrays and iterables

test('the shopping list has milk on it', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk'
    ]
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
    expect(shoppingList).not.toContain('wodka')
})

// Exceptions

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!')
}
test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)

    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK!')
    expect(() => compileAndroidCode()).toThrow(/JDK/)

    // or you can match an exact error message using a regexp
    expect(() => compileAndroidCode()).not.toThrow(/^you are using the wrong JDK$/)
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/)
})
