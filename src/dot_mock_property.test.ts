test('All mock functions have this special .mock property', () => {
    const myMock1 = jest.fn();
    const a = new myMock1();
    console.log(myMock1.mock.instances);
});

test('The mock function is also available as the return value of .bind()', () => {
    const myMock2 = jest.fn();
    const b = {};
    const bound = myMock2.bind(b);
    bound();
    console.log(myMock2.mock.contexts);
});


test('These mock members are very useful in tests to assert how these functions get called, instantiated, or what they returned', () => {
    const someMockFunction = jest.fn((x, y) => x + y);
    someMockFunction('first arg', 'second arg');
    // The function was called exactly once
    expect(someMockFunction.mock.calls).toHaveLength(1);
})
