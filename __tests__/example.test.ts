interface Hello {
    name: string
}
let me : Hello = {
    name: 'me'
}

// @ts-ignore
test("1 * 2", () => {
    expect(2).toBe(2);
});