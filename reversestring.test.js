const reverseString = require('./reversestring');

test('reversestring should be exit', ()=> {
    expect(reverseString).toBeDefined();
});
test('String reverse', ()=> {
    expect(reverseString('hello')).toEqual('olleh');
})
test('String reverse', ()=> {
    expect(reverseString('Hello')).toEqual('olleh');
})