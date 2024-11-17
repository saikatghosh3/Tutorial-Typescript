// no duplicate data . types: 1.numeric enum 2. sting enum , 3. heterogenous enum
//. numeric 
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["savaData"] = 2] = "savaData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
//  we are giving default value to the numeric enum 
console.log(RequestType);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["savaData"] = "Save_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.readData);
console.log(RequestType2);
// Heterogenous data 
var RequestType3;
(function (RequestType3) {
    RequestType3["READDATa"] = "READ_DATA";
    RequestType3[RequestType3["id"] = 121] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.id);
