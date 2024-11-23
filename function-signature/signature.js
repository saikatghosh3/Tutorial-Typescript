// let userInfo : ()=> string;
// if we write that the we have to definitely return a string 
var userInfo1;
var userInfo2;
// we are passing parameter
userInfo1 = function () {
    console.log("saikat ghosh is 30 years old");
};
userInfo1();
userInfo2 = function (name) {
    console.log("".concat(name, " is 30 years old"));
};
userInfo2("Tony ghosh");
