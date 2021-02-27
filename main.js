'use strict';

// PUSH
const arr1 = ['I', 'love', 'learning'];
arr1.push('JavaScript');
console.log(arr1);

//POP
arr1.pop();
console.log(arr1);

//CONCAT
const arr2 = ['JavaScript'];
const concArrays = arr1.concat(arr2);
console.log(concArrays);

//SPLICE
arr1.splice(1, 1, 'Enjoy');
console.log(arr1);

//FOR EACH
concArrays.forEach(item => console.log(item));

//FILTER
const users = [
    {
        id: 0,
        userName: 'Petro',
        balance: 0
    },
    {
        id: 1,
        userName: 'Bob',
        balance: 100
    },
    {
        id: 2,
        userName: 'Nelly',
        balance: 0
    },
    {
        id: 3,
        userName: null,
        balance: 0
    },
    {
        id: 4,
        userName: 'Kevin',
        balance: 90
    }
];

const usersWithMoney = users.filter(user => user.balance > 0);
console.log(usersWithMoney);

//MAP
const verifiedUsers = users.map(user =>  user.isVerified = user.userName ? true : false);
console.log(verifiedUsers);

