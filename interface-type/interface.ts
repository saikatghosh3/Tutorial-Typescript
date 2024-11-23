// let users :{
//     id: number;
//     name:string;
//     age: number
// }[]=[];

// let user1:{
//     id: number;
//     age:number;
//     name:string;
// } ={
//     id:1,
//     name:"Saikat Ghosh",
//     age: 32
// }
// let user2:{
//     id: number;
//     age:number;
//     name:string;
// } ={
//     id:2,
//     name:"Tony Ghosh",
//     age: 40
// }
// users.push(user1);
// users.push(user2);

// const printUserInfo = (user: {id:number; name:string; age: number}) =>{
//  console.log(`userId = ${user.id}, name = ${user.name} age= ${user.age}`);
 
// }

// users.forEach(user => printUserInfo(user))
// The above program is without interface

interface IUser {
    id:number;
    name:string;
    age: number;
}
let users : IUser[] =[];
let user1 : IUser = {
    id:1,
    name: "Saikat Ghosh",
    age:32,
};
let user2 : IUser = {
    id:2,
    name: "Saikat",
    age:4,
};
users.push(user1);
users.push(user2);

const printUserInfo = (user: IUser) =>{
 console.log(`userId = ${user.id}, name = ${user.name} age= ${user.age}`);
 
}
users.forEach(user => printUserInfo(user))