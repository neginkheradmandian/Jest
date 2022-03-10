const isAnagram = require('./anagram')

test('IsAnagram function exits', ()=> {
    expect(typeof isAnagram).toEqual('function');
})
test('cinema is Anagram of iceman', ()=> {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
})