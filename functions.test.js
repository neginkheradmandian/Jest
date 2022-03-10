beforeEach(()=> initDatabase());
afterEach(()=> closeDatabase());
const initDatabase= ()=> console.log('Database init ...');
const closeDatabase= ()=> console.log('Database closed...');

const functions = require('./functions');
test('add 2+2 must be 4', ()=> {
    expect(functions.add(2,3)).toBe(5)
})
test('add 2+2 must not 5', ()=> {
    expect(functions.add(2,3)).not.toBe(6)
})
test('should be null', ()=> {
    expect(functions.isNull()).toBeNull()
})
test('should be falsy', ()=> {
    expect(functions.checkValue(undefined)).toBeFalsy()
})
test('User should be Negin Kherad', ()=> {
    expect(functions.createUse()).toEqual({
        firstName: 'Negin',
        lastName: 'Kherad'})
})
test('Should be under 1600', ()=> {
    const load1=800;
    const load2=700;
    expect(load1+load2).toBeLessThan(1600);
})
test('There is no I in team', ()=> {
    expect('team').not.toMatch('/I/')
})
test('Should contain admin', ()=> {
    const usernames= ['negin', 'radin', 'admin']
    expect(usernames).toContain('admin')
})
test('User fetch name schould be Leanna Graham', ()=> {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })

})

test('User fetch name schould be Leanna Graham', async()=> {
    expect.assertions(1);
    const data=await functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })

})