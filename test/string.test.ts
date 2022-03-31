const anything= "UNAC"

test("UNAC contains UN"), () =>{
    expect(anything).toMatch(/UN/);
};
test('Test unac no contains an p', () => {
    //probar
    expect(anything).not.toMatch('p');
})