import {sum } from "../src/sum";


test('test sum 5+5(10), be greater than 5', () => {
    //probar
    expect(sum(5, 5)).toBeGreaterThan(5);
})

test('test be greater or equal than 10', () => {
    //probar
    expect(sum(5, 5)).toBeGreaterThanOrEqual(10);
})

test('test sum 5+5(10),to be less or equal 10', () => {
    //probar
    expect(sum(5, 5)).toBeLessThanOrEqual(10);
})