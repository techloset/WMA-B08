// // npm install -g typescript
// // tsc --init
// // typescript types
// type UserNum = number
// var num1:UserNum = 10;
// var num2:number = 20;
// var total:number = num1 + num2;
// var userName:string = "ase";
// var isUpdated:boolean = true;
// var isUndefined:undefined = undefined;
// var isNull:null = null;
// var isUnknown:unknown = "unknown";
// var anyType:any = false

// // prompt input in typescript
// var userInput:number =+ (prompt("Enter your name") ?? 0);


// var numArray:number[] = [1,2,3,4,5];
// var stringArray:string[]= ["a","b","c"];
// var booleanArray:boolean[] = [true,false,true];
// var anyArray:any[] = [1,"a",true];
// var data:[string,number,boolean] = ["ase",1,true];

// // typescript functions
// function add(a:number, b:number[]):number[]{
//     return [a + b[0]];
// }

// add(10,[1,2,3]);

// let add2 = (a:number, b:number[]):number[] => {
//     return [a + b[0]];
// }

// add2(10,[1,2,3]);

// type ABC = {
//     name:string,
//     age:number,
// }

// type XYZ = {
//     isUpdated:boolean,
//     email:string
// }

// type SumType = ABC | XYZ
// // objects
// let user:SumType= {
//     name:"ase",
//     age:22,
// }

// type CustomType = string | number | boolean

// let custom:CustomType = 7;
 

// write a bill calculator based on user unit consumed in typrescript
// base unit rate is 40 RS
// tax if unit is 0 to 200 , 1.5%
// tax if unit is 200 to 500 , 5.5%
// tax if unit is 500+ , 10.5%
// if costumer is wapda employee give them 100 unit free every month

function add(a:number, b:number):number{
    return a + b;
}
var result:number = add(10,20);

function addText(a:string, b:string):string{
    return a + b;
}
var resultText:string = addText("ase","em");

// generic
// function addGen<X,Y>(a:X,b:Y):[X,Y]{
//     return [a,b];
// }
// var resultGen:[number,string] = addGen<number,string>(10,"6");
// var resultGenText:[number,string] = addGen<number,string>(67,"em");
// console.log("resultGen",resultGen);
// console.log("resultGenText",resultGenText);



// type
type UserType = {
    name:string,
    age:number,
    email:string,
    isUpdated:boolean,
}


// interface

interface UserInterface {
    name:string,
    age:number,
    email:string,
    isUpdated:boolean,
}



// OOP in typescript
class User implements UserInterface{
    name:string;
    age:number;
    email:string;
    isUpdated:boolean;
    constructor(name:string, age:number, email:string, isUpdated:boolean){
        this.name = name;
        this.age = age;
        this.email = email;
        this.isUpdated = isUpdated;

    }
    getName(){
        return this.name;
    }
}

let user1:UserInterface = new User("ase",22,"gmail",true);


// inheritance in typescript
class Admin extends User{
    isAdmin:boolean;
    constructor(name:string, age:number, email:string, isUpdated:boolean, isAdmin:boolean){
        super(name,age,email,isUpdated);
        this.isAdmin = isAdmin;
    }
    getAdmin(){
        return this.isAdmin;
    }
}

let admin1:Admin = new Admin("ase",22,"gmail",true,true);
console.log("admin1",admin1.getAdmin());

// encapsulation in typescript
class Encap{
    private name:string;
    private age:number;
    protected email:string;
    public isUpdated:boolean;
    constructor(name:string, age:number, email:string, isUpdated:boolean){
        this.name = name;
        this.age = age;
        this.email = email;
        this.isUpdated = isUpdated;
    }
     getName(){
        return this.name;
    }
}

let encap1:Encap = new Encap("ase",22,"gmail",true);
console.log("encap1",encap1.getName());


//interace 
interface UserInterface{
    name:string;
    age:number;
    email:string;
    isUpdated:boolean;
    getName():string;
}
// abstract class in typescript
abstract class Abstract implements UserInterface{
    abstract name:string;
    abstract age:number;
    abstract email:string;
    abstract isUpdated:boolean;
     getName():string{
        return this.name;
    }
}

// polymorphism in typescript
class Poly extends Abstract{
    name:string;
    age:number;
    email:string;
    isUpdated:boolean;
    constructor(name:string, age:number, email:string, isUpdated:boolean){
        super();
        this.name = name;
        this.age = age;
        this.email = email;
        this.isUpdated = isUpdated;
    }
}

let poly1:Poly = new Poly("ase",22,"gmail",true);
console.log("poly1",poly1.getName());
