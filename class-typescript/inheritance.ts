class User {
    userName:string;
    age: number;


    constructor(userName: string, age:number){
        this.userName = userName;
        this.age = age;
    }
    display (): void{
        console.log(`userName: ${this.userName} , age: ${this.age}`);
    }
    
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
}
}
let student1 = new Student("Saikat", 45, 122244535);
student1.display();