  abstract class User {
    userName:string;
    age: number;


    constructor(userName: string, age:number){
        this.userName = userName;
        this.age = age;
    }
   abstract display (): void;
//  abstract method er kono body thakete parbe na     
}
// let user1 = new User("saikat", 23);
//     user1.display();
class Student extends User{
  studentId: number;

  constructor(userName: string, age:number, studentId: number){
    super(userName, age);
    this.studentId = studentId
   
}
display (): void{
    console.log(`userName: ${this.userName} , age: ${this.age},id:${this.studentId} `);
    // jodi abstract class inherit kora hoi tahole must er method use kora lagbe.
}
}
// abstract er kono object make kora jaba na