import {sum } from "../src/sum";

test ("Test sum function 2+2 equal 4", () => {

    expect(sum(2,2)).toBe(5);
});
test ("Test sum function 5+5 equal 10", () => {

    expect(sum(5,5)).toBe(10);
});