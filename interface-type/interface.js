// let users :{
//     id: number;
//     name:string;
//     age: number
// }[]=[];
var users = [];
var user1 = {
    id: 1,
    name: "Saikat Ghosh",
    age: 32,
};
var user2 = {
    id: 2,
    name: "Saikat",
    age: 4,
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userId = ".concat(user.id, ", name = ").concat(user.name, " age= ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
