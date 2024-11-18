class User {
    userName:string;
    age: number;


    constructor(userName: string, age:number){
        this.userName = userName;
        this.age = age;
    }
    display (){
        console.log(`userName: ${this.userName} , age: ${this.age}`);
    }
    
}
let user1 = new User("saikat", 23);
    user1.display();