
type User = {userName: string; userId: number }
let users : User[];
users =[]

let user1 : User;
user1 = { userName:"saikat", userId:233}
users.push(user1);

let user2: User;
user2 = {userName:"ghosh", userId: 445 };

users.push(user2)

let user3: User;
user3 = {userName:"tony", userId: 333 };

users.push(user3)
console.log(users);


// Another example 
type RequestType = "GET" | "POST";
// it will recieve only two value only GET and POST 
let getRequest :RequestType;
// it will only receive what we've declared on the request type
getRequest = "GET";
// the only GET AND POST VALUE WE CAN USE 
