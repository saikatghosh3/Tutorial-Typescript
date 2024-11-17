// no duplicate data . types: 1.numeric enum 2. sting enum , 3. heterogenous enum

//. numeric 
 enum RequestType {
    readData = 1,
    savaData =2, 
    deleteData =3, 
 }
//  we are giving default value to the numeric enum 
console.log(RequestType);

// string enum
enum RequestType2 {
    readData = "Read_Data",
    savaData = "Save_Data", 
    deleteData ="Delete_Data", 
 }
 console.log(RequestType2.readData);
 console.log(RequestType2);

 // Heterogenous data 
 enum RequestType3 {
    READDATa = "READ_DATA",
    id = 121,
 }
 console.log(RequestType3.id);
 