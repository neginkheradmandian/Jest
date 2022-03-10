const chunkArray = require('./chunk');

test('chunkArray to be defined', ()=>{
    expect(chunkArray).toBeDefined();
})
test('Chunk arr to length 2', ()=> {
    const number= [1,2,3,4,5,6,7,8,9,10];
    const len=2;
    const chunkArr= chunkArray(number, len);
    expect(chunkArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]]);
})