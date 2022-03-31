const array =  ["value 1","value 2","value3"];

test("const array contains value 2", ()=>{
    expect(array).toContain("value 2");
}); 

test('const contain value3 ', () => {
    expect(array).toContain('value3');
})

test('const no contain unac ', () => {
    expect(array).not.toContain('unac');
})