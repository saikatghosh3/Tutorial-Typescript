 // access modifire : public , private protected, readonly
 
 class User {
   public userName:string;
  public  age: number;


    constructor(userName: string, age:number){
        this.userName = userName;
        this.age = age;
    }
 display (): void{
    console.log("hi");
    
}
     
}
// Class private kore dile amra class er baire r access korte parbo na.
// protectd k amra only subclass theke use korte parbo, onno kothau theke parbo na.



class Student extends User{
  studentId: number;

  constructor(userName: string, age:number, studentId: number){
    super(userName, age);
    this.studentId = studentId
   
}
display (): void{
    console.log(`userName: ${this.userName} , age: ${this.age},id:${this.studentId} `);
}
}
let Student1 = new Student("ghosh",31,13020200023);
// Student1.display();

let user1 = new User("saikat", 23);
user1.userName = "tony";
console.log(user1);