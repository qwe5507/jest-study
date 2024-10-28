import {timer} from './callback';

test('타이머 잘 실행되나?', (done) => {
    timer((message: string) => {
       expect(message).toBe('success');
       done();
    });
}, );

test('시간아 빨리가라!', (done) => {
    expect.assertions(1);
    jest.useFakeTimers();
    timer((message: string) => {
        expect(message).toBe('success');
        done();
    });
    // jest.runAllTimers();
    jest.advanceTimersByTime(10_100); // 10초 흐르게
});