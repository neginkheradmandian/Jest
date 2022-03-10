const { default: axios } = require("axios");

const functions = {
     add: (a,b)=> a+b,
     isNull: ()=> null,
     checkValue: (x)=> x,
     createUse: ()=> {
          const user={ firstName: 'Negin'};
          user['lastName'] = 'Kherad';
          return user;
     },
     fetchUser: ()=> axios.
     get('https://jsonplaceholder.typicode.com/users/1')
     .then(res=> res.data)
     .catch(err=> 'error')
};
module.exports = functions