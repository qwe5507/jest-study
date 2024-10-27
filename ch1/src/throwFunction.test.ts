import {error, CustomError, customError} from "./throwFunction";

test('error가 잘 난다.', () => {
    // expect(error()).toThrowError() // 이건 deprecated됨
    // expect(error()).toThrow(Error);
    expect(() => error()).toThrow(new Error('test'));
    expect(() => error()).not.toThrow(new Error('xxx'));
    expect(() => customError()).toThrow('test');
    expect(() => customError()).not.toThrow('xxx');
    expect(() => customError()).toThrow(CustomError);
});

test('error가 잘 난다.(try/catch)', () => {
    try {
        error();
    } catch (err) {
        expect(err).toStrictEqual(new Error());
    }
});

