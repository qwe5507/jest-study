import { first, second, third } from "./order";

test('first -> second -> third', () => {
   const spy1 = jest.fn(first);
   const spy2 = jest.fn(second);
   const spy3 = jest.fn(third);
   spy1();
   spy2();
   spy3();
   console.log(spy1.mock.invocationCallOrder);
   console.log(spy2.mock.invocationCallOrder);
   console.log(spy3.mock.invocationCallOrder);
    expect(spy1.mock.invocationCallOrder[0])
        .toBeLessThan(spy2.mock.invocationCallOrder[0]);
    expect(spy3.mock.invocationCallOrder[0])
        .toBeGreaterThan(spy2.mock.invocationCallOrder[0]);
});

test('first -> second -> third 2', () => {
   const spy1 = jest.fn(first);
   const spy2 = jest.fn(second);
   const spy3 = jest.fn(third);
   spy1();
   spy2();
   spy3();
   console.log(spy1.mock.invocationCallOrder);
   console.log(spy2.mock.invocationCallOrder);
   console.log(spy3.mock.invocationCallOrder);
   expect(spy1).toHaveBeenCalledAfter(spy2);
   expect(spy3)
       .toBeGreaterThan(spy2.mock.invocationCallOrder[0]);
});