// Qiita記事 jestを完全に理解した(jest.fn編)
// https://qiita.com/only/items/466a09c8602466fe2333

function callItTwice(fn) {
    fn();
    fn();
}

test('call the mock function twice', () => {
    const mockFunction = jest.fn();

    // モック関数を直接呼び出す
    mockFunction();

    // モック関数を他の関数の中から呼び出す
    callItTwice(mockFunction);

    // mockFunctionが呼び出されたことを確認する
    expect(mockFunction).toHaveBeenCalled();

    // mockFunctionが合計で3回呼び出されたことを確認する
    expect(mockFunction).toHaveBeenCalledTimes(3);
})

function callItWithArgs(fn, arg1, arg2) {
    fn(arg1, arg2);
}

test('call the mock function with 2 arguments', () => {
    const mockFunction = jest.fn();

    // モック関数を他の関数の中から引数付きで呼び出す
    callItWithArgs(mockFunction, 'left', 'right');

    // mockFunctionが'arg1'と'arg2'という引数で呼び出されたことを確認する
    expect(mockFunction).toHaveBeenCalledWith('left', 'right');
})

function callItToReturn(fn) {
    return fn();
}

test('assert the mock function retuns the value as expected', () => {
    const mockFunction = jest.fn();
    // モック関数が'value'を返すように設定する
    mockFunction.mockReturnValue('value');

    // callItToReturn関数の中でモック関数を呼び出す
    const result = callItToReturn(mockFunction);

    // mockFunctionが'value'を返したことを確認する
    expect(result).toBe('value');
})

test('mock function can return variable values', () => {
    const mockFunction = jest.fn();

    // モック関数が呼び出されるたびに異なる値を返すように設定する
    mockFunction.mockReturnValueOnce('first call')
        .mockReturnValueOnce('second call')
        .mockReturnValue('other calls');

    // 1回目の呼び出し
    expect(mockFunction()).toBe('first call');
    // 2回目の呼び出し
    expect(mockFunction()).toBe('second call');
    // 3回目の呼び出し
    expect(mockFunction()).toBe('other calls');
    // 4回目の呼び出し
    expect(mockFunction()).toBe('other calls');
    // mockFunctionが4回呼び出されたことを確認
    expect(mockFunction).toHaveBeenCalledTimes(4);
});

function strategy(fn) {
    return fn(5, 7);
}

test('mock function can implement custom behavior', () => {
    // jest.fn()に実装を渡すこともできる
    const mockFunction = jest.fn();
    mockFunction.mockImplementation((num1, num2) => {
        return num1 * num2;
    })
    
    // strategy関数の中でモック関数を呼び出す
    const result = strategy(mockFunction)

    // mockFunctionが正しい引数で呼び出されたことを確認する
    expect(mockFunction).toHaveBeenCalledWith(5, 7);

    // mockFunctionが35を返したことを確認する
    expect(result).toBe(35);
})
