import {div} from "../src/div";

test('Test div 10/0, givs error', () => {
    //probar
    expect(div(10, 0 )).toBe(Infinity);
})