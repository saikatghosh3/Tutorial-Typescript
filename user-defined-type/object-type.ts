// simple representation 
// let user1: {userName:string, userId:number};
// user1 = {
//     userName: "saikat",
//     userId : 121
// }
// console.log(user1);
//  now we want to declear array of object 
let users : object[];
users = [];

let user1 : {userName:string, userId ?:number};
let user2 : {userName:string, userId ?:number};
//  now we can give one value 
user1 = {userName:"saikat", userId: 121 };
users.push(user1);

user2 = {userName:"ghosh", userId: 445 };

users.push(user2)
console.log(users);


