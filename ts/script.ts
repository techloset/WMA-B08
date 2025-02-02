// npm install -g typescript
// tsc --init
// typescript types
type UserNum = number
var num1:UserNum = 10;
var num2:number = 20;
var total:number = num1 + num2;
var userName:string = "ase";
var isUpdated:boolean = true;
var isUndefined:undefined = undefined;
var isNull:null = null;
var isUnknown:unknown = "unknown";
var anyType:any = false


var numArray:number[] = [1,2,3,4,5];
var stringArray:string[]= ["a","b","c"];
var booleanArray:boolean[] = [true,false,true];
var anyArray:any[] = [1,"a",true];
var data:[string,number,boolean] = ["ase",1,true];

// typescript functions
function add(a:number, b:number[]):number[]{
    return [a + b[0]];
}

add(10,[1,2,3]);

let add2 = (a:number, b:number[]):number[] => {
    return [a + b[0]];
}

add2(10,[1,2,3]);

type ABC = {
    name:string,
    age:number,
}

type XYZ = {
    isUpdated:boolean,
    email:string
}

type SumType = ABC & XYZ
// objects
let user:SumType= {
    name:"ase",
    isUpdated:true,
    age:22,
    email: "as@s.sp"
}

type CustomType = string | number | boolean

let custom:CustomType = 7;
 

// write a bill calculator based on user unit consumed in typrescript
// base unit rate is 40 RS
// tax if unit is 0 to 200 , 1.5%
// tax if unit is 200 to 500 , 5.5%
// tax if unit is 500+ , 10.5%
// if costumer is wapda employee give them 100 unit free every month
