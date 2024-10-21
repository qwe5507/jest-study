import {sum, obj} from "./toHaveBeenCalled";

test('sum 함수가 호출되었다', () => {
    const sumSpy = jest.fn(sum);
    sumSpy(1, 2);
    expect(sumSpy).toHaveBeenCalled();
});

test('sum 함수가 한번 호출되었다', () => {
    const sumSpy = jest.fn(sum);
    sumSpy(1, 2);
    expect(sumSpy).toHaveBeenCalledTimes(1);
});

test('sum 함수가 1,2와 함께 호출되었다', () => {
    const sumSpy = jest.fn(sum);
    sumSpy(1, 2);
    expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test('obj.minus 메서드가 1,2와 함께 호출되었다(spy함수 생성)', () => {
    const minusSpy = jest.fn(obj.minus);
    minusSpy(1, 2)
    expect(minusSpy).toHaveBeenCalledWith(1, 2);
});

test('obj.minus 메서드가 1,2와 함께 호출되었다(spy 삽입)', () => {
    jest.spyOn(obj, 'minus');
    obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledWith(1, 2);
});

test('test', () => {
    const spy = jest.spyOn(obj, 'minus');
    obj.minus(1, 2);
    // spy(1, 2) // error
    expect(obj.minus).toHaveBeenCalledWith(1, 2);
    expect(spy).toHaveBeenCalledWith(1, 2);
});
