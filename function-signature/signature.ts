// let userInfo : ()=> string;
// if we write that the we have to definitely return a string 
// shis is called signature.
let userInfo1: () => void
let userInfo2 : (name: string)=> void
// we are passing parameter

userInfo1 = ()=>{
    console.log("saikat ghosh is 30 years old");
    
};
userInfo1();
userInfo2 =(name: string)=>{
    console.log(`${name} is 30 years old`);
    
};
userInfo2("Tony ghosh");