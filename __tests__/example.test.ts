interface Hello {
    name: string
}
const me : Hello = {
    name: 'me'
}

console.log(me)

test("1 * 2", () => {
    expect(2).toBe(2);
});