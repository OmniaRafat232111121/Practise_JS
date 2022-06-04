
// //Set in Default LocalStorge on The Body
// document.body.classList.add(localStorage.getItem("pageColor")||"red");
// var el=document.querySelectorAll(".color-switcher li");
// var classesList=[];

// //loop on elements
// for(var i=0;i<el.length;i++){
//     //Get classesList

//     classesList.push(el[i].getAttribute('data-color'));
//     el[i].addEventListener("click",function(){
//         //Remove All Old Classes
//         document.body.classList.remove(...classesList);
//         //Add current Class li Data Attribute
//         document.body.classList.add(this.getAttribute("data-color"));
//         localStorage.setItem("pageColor",this.getAttribute("data-color"));
 
//     },
//     false
//     );


// }
// console.log(localStorage.getItem("pageColor"));
// console.log(classesList);
// let a="Elzero web school";
// console.log(a.length);
// console.log(a.substring(1,6));
// console.log(a.substring(6,2));
// console.log(a.substring(-20,6));
// console.log(a.substring(a.length-5,a.length-4)); //17
// //substr
// console.log(a.substr(-4));
// console.log(a.substr(-4,2));
// console.log(a.includes("web"));
// console.log(a.startsWith("E",2))
// console.log(a.endsWith("o"));
// console.log(a.endsWith("o",6));


//  console.log(a.charAt(2).toUpperCase() +a.slice(3,6));
//  console.log(a.charAt(13).toUpperCase().repeat(8));
//  //split in array

//   console.log(a.substring(0,6).split());
//  console.log(a.substr(0,6),a.substr(11));
//  console.log(a.charAt(0).toLocaleLowerCase() + a.substring(1,a.length-1).toUpperCase() + a.charAt(a.length-1).toLowerCase());
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// //slice,substring  end not included
// console.log(animals.slice(2));
// //[ 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2,4));
// //['camel', 'duck']
// console.log(10=="10");//compare value only
// console.log(-100=="-100");
// console.log(10!="10"); //compare value only
// console.log(10==="10"); //compare value+type
// console.log(10!=="10");
// console.log(10!==10);
/*logical operator*/
// console.log(!true);
// console.log(!(10=="10"));
// console.log(10=="10" || 10>=8||10>=90);

/*control flow*/
// let price=100;
// let discount=true;
// let country="Egypt";
// let discountAmount=30;
// if(discount===true){
//     price-=discountAmount;
// }
// else if(country==="Egypt"){

// if(student===true){
//     price-=discountAmount+30;
// }
// else{
//     price-=discountAmount+10;
// }
// }

// else{
//     price-=10;
// }
// console.log(country);

// let theGender="Male";
// // theGender=="Male" ?console.log("Mr"):console.log("Mrs");
// let result=theGender==="Male"?"Mr":"Mrs";
// document.write(result);
// let theAge=40;
// theAge <20 ?console.log(20):theAge >20&&theAge<80?console.log("20 to 80"):console.log("unknown");
// let price=0;
// console.log(`The price is ${price||89}`);
// console.log(`The price is ${price&&89}`);





// let job = "";
// let salary = 0;
// switch (job) {
//   case "Manager":
//     salary = 8000;
//     console.log(salary);
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(salary);
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     console.log(salary);
//   default:
//     salary = 4000;
//     console.log(salary);
// }

// const characters = [
//   {
//       name: 'Luke Skywalker',
//       height: '172',
//       mass: '77',
//       eye_color: 'blue',
//       gender: 'male',
//   },
//   {
//       name: 'Darth Vader',
//       height: '202',
//       mass: '136',
//       eye_color: 'yellow',
//       gender: 'male',
//   },
//   {
//       name: 'Leia Organa',
//       height: '150',
//       mass: '49',
//       eye_color: 'brown',
//       gender: 'female',
//   },
//   {
//       name: 'Anakin Skywalker',
//       height: '188',
//       mass: '84',
//       eye_color: 'blue',
//       gender: 'male',
//   },
// ];
// //names
// const names=characters.map((character)=>{
//   return character.name;
// })
// console.log(names);
// //height
// const heights=characters.map((character)=>{
//   return character.height;
// });
// console.log(heights);
// //name,height Properties
// const miniFieldRecord=characters.map((character)=>({
//   name:character.name,
//   height:character.height,
// }));
// console.log(miniFieldRecord);
// //Get array all of firstname
// const firstNames=characters.map((character)=>character.name.split(" ")[0]);
// console.log(firstNames);
// let map=new Map();
// map.set("omnia","rafat");
// map.set("salma","ali");
// console.log(map.keys());
// console.log(map.has("omnia"));
// console.log(map.get("omnia"));

// const object1={
//   1:"good",
//   2:"bad"
// };

// map.forEach((key,value) => {
//   console.log(`${key}:${value}`);
// });
  
// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   bio: function() {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf: function() {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   }
// };
// console.log(person.name)
// console.log(person.name[0])
// console.log(person.age)
// console.log(person.bio())
// console.log(person.introduceSelf());

// const person2={
//   name:"chirls",
//   introduceSelf(){
//     console.log(`${this.name}`);
//   }

// };
//js class
// console.log(person2.introduceSelf());
// class Car{
//   constructor(name,year){
//     this.name=name;
//     this.year=year;
//   }
//   age(){
//     let date=new Date();
//     return date.getFullYear()-this.year;
//   }

// }
// const myCar=new Car("FORD",2013);
// const car=document.getElementById("demo").innerHTML=
// "my car is"+ " " + myCar.age() +"years old";
/*example 2*/
// class Car{
//   constructor(name,year){
//     this.name=name;
//     this.year=year;
//   }
//   age(x){
//     return x-this.year;
//   }
// }
// let date=new Date();
// let year=date.getFullYear();
// let myCar=new Car("Ford",2011);
// document.getElementById('demo').innerHTML=
// "my car is"+myCar.age(year)+"years age";

// class Car{
//   constructor(brand){
//     this.carname=brand;
//   }
//   present(){
//     return " I have a "+this.carname;
//   }
// }
// class Model extends Car{
// constructor(brand,model){
// super(brand);
// this.model=model;
// }
// show(){
//   return this.present()+', it is a ' + this.model;
// }
//   }
//   let myCar = new Model("Ford", "Mustang");
//   document.getElementById("demo").innerHTML = myCar.show();
//   document.getElementById("demo").innerHTML = myCar.present();



// class Car{
//   constructor(model){
    
//     this.carmodel=model;
//   }
  
//   get cmodel(){
//     return this.carmodel;

//   }
//   set cmodel(y){
//     this.carmodel=y;
//   }

// }
//  let myCar=new Car("Elem");
// // document.getElementById("demo").innerHTML = myCar.cnam;
// document.getElementById("demo").innerHTML = myCar.cmodel;


// class Car{
// constructor(brand){
//   this._carname=brand;
// }
// set carname(x){
//   this._carname=x;
// }
// get carname(){
//   return this._carname;
// }
// }
// let myCar=new Car("giduu");
// myCar.carname="volvo";
// document.getElementById("demo").innerHTML = myCar.carname;
// class Car{
//   constructor(name){
//     this.name=name;
//   }
//     static hello(x){
//       return "Hello"+x.name
    
//   }
// }
// let myCar=new Car("FOR");
// document.getElementById("demo").innerHTML = Car.hello(myCar);

// function myFunction(a, b) {
//   return a * b;
// }
// document.getElementById("demo").innerHTML = myFunction.toString();\

// const x=(x,y)=> x*y;

// function findMax(){
//   let max=-Infinity;
//   for(let i=0;i< arguments.length;i++){
//     if(arguments[i]>max){
//       max=arguments[i];
//     }
//   }
//   return max;
// }
// document.getElementById("demo").innerHTML = findMax(4, 5, 6);


// let num1=3;
// const num2=10;
// obj1={
//   name:"omnia"
// }

// // console.log(obj1.name)
// obj1.name="ali"

// console.log(obj1.name);
/*function &arrow function*/
// var getRegvalue=function(){ //Es5
//   return 10;
// }
// console.log(getRegvalue());

// const getArrowRegvalue=(m,bouns)=>{   //Es6
//   return 10*m+bouns;
// }
// console.log(getArrowRegvalue(30,10));

/*
*/
//lexical this
/*
const employee={
  id:1,
  greet:function(){
   setTimeout=(()=>{console.log(this.id)},100);
}
};
employee.greet();
*/
// let percentBouns=()=>0.1;
// let getValue=function(value=10,bouns=10*percentBouns()){
//   console.log(value+bouns);
//   console.log(arguments.length);
// }
// // getValue();
//  getValue(10,20);
//  getValue(10,20,40);
// getValue(undefined,30);
/*rest operator*/
//ex1
// function fun (...theArgs){
//   console.log(theArgs.length);
// }
// fun(5,4);
// fun();
// fun(5);

//ex2
// function myFun(a,b,...manyMoreArgs){
//   console.log("a",a)
//   console.log("b",a)
//   console.log("manyMoreArgs",manyMoreArgs);
// }
// myFun("one","two","three","Four","Five","six");
//ex3
// function multiply(multipler,...theArgs){
//   return theArgs.map(element=>{
//     return multipler*element;
//   })
// }
// let arr=multiply(2,4,8,9,7);
// console.log(arr)
//ex4
// let displayColors=function(message,...colors){
//   console.log(message);
//   // console.log(colors); //The Arguments=>Array
//   console.log(arguments.length);
//   for(let i in colors){
//     console.log(colors[i]);
//   }
// }
// let message="List of Coloers";
// displayColors(message,'Red');
// displayColors(message,'Red','Blue');
// displayColors(message,'Red','Blue','Green');
/*spread syntax*/
// function sum(x,y,z){
//   return x+y+z;
// }
// const numbers=[1,2,3];
// console.log(sum(...numbers));
// console.log(sum.apply(null,numbers));
// function myFunction (x,y,z){
// }
// let args=[0,1,2];
// myFunction.apply(null,args);
// myFunction(...args);
/*object literal*/
// let person={
//   firstName:"omnia",
//   lastName:"rafat"
// }
// console.log(person.firstName);
// console.log(person.lastName);
// function createPerson(firstName,lastName,age){
//   let fullname=firstName+" "+lastName;
//   return{
//     firstName,
//     lastName,
//     fullname,
//     isSenior(){
//       return age >50;
//     }

//   }
// }
// let p=createPerson("Ross","Gallere",70);
// console.log(p.fullname);
// console.log(p.isSenior())
// const templateFn=(expression)=>{
//   `string text ${expression} string text`;
// }
// let user="Omnia";
// let greet=`welcome 'single' ${user} to ES2015`;
// console.log(greet);
// let colors=['Red','Blue',"Green"];
// for(let i in colors){
//   console.log(colors[i]);
// }


// class person{
// greet()
// }
// let p=new person();
// console.log(p.greet===person.prototype.greet);

// class Person{
//   constructor(name){
//     console.log(name+"Person Constructor")
//   }
//   getId(){
//     return 10;
//   }
//   static greet(name){
//     console.log("Hello from Greet" +name);
//   }
// }
// class Employee extends Person{
// constructor(name){
//   super(name);
// console.log(name+"Employee Constructor");
// }
// static greet(name){
//   console.log("Hello from Greet "+name);
// }
// getId(){
//   return super.getId();
// }
// }
// let e=new Employee("Omnia");
// let p=new Person("ali")
// console.log(e.getId());
// console.log(Person.greet());

// let mySet=Object.create(null);
// mySet.id=1;
// if(mySet.id){
//   console.log("ID is exist");
// }
//create set
//  const letters=new Set(['a','b','c']);
//  let text="";
//  letters.forEach(function(value){
//    text+=value;
//  })
//create a set and add literal value
// const letters=new Set([]);
// letters.add("a");
// letters.add('b');
// letters.add("c");
// letters.add("c");
// function execRecursively(fn,subject,_ref){
//   if(!_ref)
//     _ref=new WeakSet();
  
//   //avoid infinite
//   if(_ref.has(subject))
//     return;
  
//   fn(subject);
//   if("object"===typeof subject){
//     _ref.add(subject);
  
//   for(let key in subject)
//   execRecursively(fn, subject[key], _refs);
//   }}
//   const foo = {
//     foo: "Foo",
//     bar: {
//       bar: "Bar"
//     }
//   };
  
//   foo.bar.baz = foo; // Circular reference!
//   execRecursively(obj => console.log(obj), foo);
// const _counter = Symbol('counter');
// const _action  = Symbol('action');
// class Countdown {
//     constructor(counter, action) {
//         this[_counter] = counter;
//         this[_action] = action;
//     }
//     dec() {
//         let counter = this[_counter];
//         if (counter < 1) return;
//         counter--;
//         this[_counter] = counter;
//         if (counter === 0) {
//             this[_action]();
//         }
//     }
// }
// const obj = {
//   [Symbol('my_key')]  : 1, 
//    enum               : 2, 
//    nonEnum            : 3
// };

// console.log(Object.defineProperty(obj, 'nonEnum', { enumerable: false })); // Making 'nonEnum' as not enumerable.
// console.log(Object.getOwnPropertyNames(obj));
// const COLOR = Symbol()
// const MODEL = Symbol()
// const MAKE = Symbol()
// class Bike {
//    constructor(color ,make,model){
//    this[COLOR] = color;
//    this[MAKE] = make;
//    this[MODEL] = model;
// }
// }
// let bike = new Bike('red','honda','cbr')
// console.log(bike)
// //property can be accessed ony if symbol name is known
// console.log(bike[COLOR])

// class sequence{
//    constructor( start = 0, end = Infinity, interval = 1 ) {
//       this.start = start;
//       this.end = end;
//       this.interval = interval;
//   }

//   [Symbol.iterator]() {
//    let counter = 0;
//    let nextIndex = this.start;
//    return  {
//        next: () => {
//            if ( nextIndex <= this.end ) {
//                let result = { value: nextIndex,  done: false }
//                nextIndex += this.interval;
//                counter++;
//                return result;
//            }
//            return { value: counter, done: true };
//        },
//        return: () => {
//            console.log('cleaning up...');
//            return { value: undefined, done: true };
//        }
//    }
// }
// }

// class Bag {
//    constructor() {
//        this.elements = [];
//    }
//    isEmpty() {
//        return this.elements.length === 0;
//    }
//    add(element) {
//        this.elements.push(element);
//    }
//    * [Symbol.iterator]() {
//        for (let element of this.elements) {
//            yield element;
//        }
//    }
// }

// let bag = new Bag();

// bag.add(1);
// bag.add(2);
// bag.add(3);

// for (let e of bag) {
//    console.log(e);
// }


// const title = 'Jack and Jill Went Up the Hill';

// console.log(title.startsWith('Jack'));
// console.log(title.startsWith('jack'));
// console.log(title.startsWith('Jill', 9));





// let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
// let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
// let newCar = myCar.slice(0, 2)

// // Display the values of myCar, newCar, and the color of myHonda
// //  referenced from both arrays.
// // console.log( JSON.stringify(myCar))

// // console.log('newCar = ' + JSON.stringify(newCar))
// // console.log('myCar[0].color = ' + myCar[0].color)
// // console.log('newCar[0].color = ' + newCar[0].color)

// // // Change the color of myHonda.
//  myHonda.color = 'purple'
//  console.log('The new color of my Honda is ' + myHonda.color)

// // // Display the color of myHonda referenced from both arrays.
//  console.log('myCar[0].color = ' + myCar[0].color)
//   console.log('newCar[0].c
// function product(name,price){
//    this.name=name;
//    this.product=product;

// }
// function Food(name,price){
//    product.call(this,name,price);
//    this.category='food';
// }
// console.log(new Food('cheese',4).name)


const animals=[
   {species:'LION',name:'KIng'},
   {species:'LION',name:'KIng'}

]
for(let i=0;i<animals.length;i++){
   (function(i){
      this.print=function(){
         console.log('#' + i + ' ' + this.species
         + ': ' + this.name);
      }
      this.print();
   }).call(animals[i],i)
}


const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum);


//Before ES6
//Destructring assigment
const person={
   name:'omnia',
   age:23,
   gender:'female'

}
// let name=person.name;
// let age=person.age;
// let gender=person.gender;
//Es6
// let {name,age,gender}=person;
// const arrValue=['one','two','three'];
// const [x,y,z]=arrValue;
// console.log(x);


// function greet(){
//    console.log("Hello world");
// }
// setTimeout(greet,400);
// console.log("The function is going")


// function greet(){
//    console.log("Hello world");
// }
// let intervalId=setTimeout(greet,4000);
// console.log('Id:'+intervalId);\



// function showTime(){
//    let dateTime=new Date();
//    let time=dateTime.toLocaleTimeString();
//    console.log(time);
//    setTimeout(showTime,3000);
// }
// showTime();
/*string method */
/*
chartAt(index)=>return a character at specifeied index position
conact()=>join two or more strings
String()=>convert any type of data to string
toUPperCase()=>convert string to Upper Case
toLowerCase()=>convert string to LoweCase
slice(start,end)=>slice part of string,end is not includes
trim()=>reomve whitespace from string
split()=>convert a string to array of string
includes()=>return boolean
substring(start,end)=>return part of string
substr(start,length)=>return part of string 
*/
const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';
const result1 = text1.concat(' '+text2);
console.log(result1); 
const result2=text1.toUpperCase();
console.log(result2);
const result3=text3.trim();
console.log(result3);
//split convert to string to array of string
const result4=text1.split();
console.log(result4);
//slice slice the string
const result5=text1.slice(0,2);
console.log(result5);




//String()
//convert any datatype to string
const c=225;
const M=true;
const res=String(c);
console.log(res);
/*arryay method*/
/*
create an array with two method
1)array literal
2)new keyword
** array may be different method,object
length is start from 1 to n
pop()=>delete last shift()=>delete from first
push()=>add last unshift()=>add from first
concat()=>join two or more array
sort()=>sort element in alpha.
find()=>return a value
findIndex()=>return a index
slice()=>select apart of array to remove and return a new array
splice(start,counting number to remove)=>remove or 
replace an array existing 
forEach()=>call a function  for each element
*/
// const newData=[
//    {'task1':programming},
//    [1,2,4],
//    function Good(){
//       console.log("Hi");
//    }
// ]


/*ForEach*/
/*
foreach()=>using with array method,Map,Set
array.foreach(function) function want to be loop in run element.
array.forEach(function(currentValue, index, arr))

*/

// let student=['salma','ali','arwa'];
// student.forEach( myFunction);
// function myFunction(item,index,arr){
//    arr[index]="Heelo"+ ' '+item;
// }
// console.log(student);


// const students=[1,2,3];
// students.forEach(element=>{
//    console.log(element);
// })

//array
// const students=['john','ali','Good'];
// for(let element of students){
//    console.log(element);
// }

const set=new Set([1,2,3,4]);
//looping through set
// for(let i of set){
//    console.log(i);
// }


// let map=newMap();
// map.set('name','jack');
// map.set('age',23);
// for(let [key,value] of map){
//    console.log(key+ '_'+value);
// }


// const iterableObj={
//    //iterator method
//    [Symbol.iterator](){
//       let step=0;
//       return{
//          next() {
//             step++;
//             if (step === 1) {
//                 return { value: '1', done: false};
//              }
//             else if (step === 2) {
//                 return { value: '2', done: false};
//             }
//             else if (step === 3) {
//                 return { value: '3', done: false};
//             }
//             return { value: '', done: true };
//         }
//     }
//       }
//    }
// for(const i of iterableObj){
//    console.log(i)
// }




// function *generator(){
//    yield 10;
//    yield 20;
//    yield 30;
// }
// const obj=generatorFun();
// for(let value of obj){
//    console.log(value);
// }



const arrValue=['My','name','is'];
console.log(arrValue);
console.log(...arrValue); 
//spread operator() convert array to string (my name is)
const arr1=['one','two'];
const arr2=[...arr1,'three','four','five'];
console.log(arr2);
//output
//['one','two','three','four','five']
// let arra1=[1,2,3];
// let arra2=arra1;
// console.log(arra1);
// console.log(arra2);
// arra1.push(4);
// console.log(arra1);


// let array1=[1,2,3];
// let array2=[...array1];
// console.log(array1);
// console.log(array2);
// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3]



// //Rest parameter
// let func=function(...args){
//    console.log(args);
// }
// func(3);
// func(4,5,6);
//(...)spread operator
// const odd=[1,3,5];
// const combained=[2,4,6,...odd];
// console.log(combained);

// function f(a,b,...args){
//    console.log(args);
// }
// f(1,2,3,4,5);

// const odd=[1,3,5];
// const combained=[...odd,2,4,6];
// console.log(combained);
/*
function compare(a,b){
   return a-b;
}
let result=compare.apply(null,[1,2]);
function compare(){
}
console.log(result);
*/


// let chars=['A',...'Bc','D'];
// console.log(chars);


// let rivers=['Nile','Ganges','yangrn'];
// let  moreRivers=['Danube','Amazon'];
// [].push.apply(rivers,moreRivers);
// console.log(rivers);

// // rivers.push(...morerivers);

// const score=[5,6,7];
// console.log(scores.at(1));

// let colors=['red','green','blue'];
// console.log(colors.length);
// colors.push('yellow');
// console.log(colors.length);
// colors=[];
// console.log(colors.length);
//sparse array
let numbers=[10,,30,44];
console.log(numbers.length);
numbers[11]=34;
//when add number to 
console.log(numbers.length);


// const fruits = ['Apple', 'Orange', 'Strawberry'];
// fruits.length = 5;

// console.log(fruits);
// const fruits = ['Apple', 'Orange', 'Strawberry'];
// fruits.length = 2;

// console.log(fruits);
// function arrayFormArgs(){
//    var result=[];
//    for(var i=0;i<arguments.length;i++){
//       result.push(arguments[i]);
//    }
//    return result;
// }
// var fruits=arrayFormArgs('a','B');
// console.log(fruits);


// function arrayFromArgs() {
//    return Array.prototype.slice.call(arguments);
// }
// var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
// console.log(fruits);

// function arrayFromArgs() {
//    return Array.from(arguments,x=>x+1);
// }

// console.log(arrayFromArgs(1, 5));
// let doubler = {
//    factor: 2,
//    double(x) {
//        return x * this.factor;
//    }
// }
// let scores = [5, 6, 7];
// let newScores = Array.from(scores,doubler.double, doubler);
// console.log(newScores);
// let even = {
//    *[Symbol.iterator]() {
//        for (let i = 0; i < 10; i += 2) {
//            yield i;
//        }
//    }
// };
// let evenNumbers = Array.from(even);
// console.log(evenNumbers);

//you can concat() with two ways array,spread array

let odds = [1,3,5];
let evens = [2,4,6];
let combined = [...odds, ...evens];
console.log(combined);

// let odds=[1,3,5];
// let even=[2,4,6];

// let com=[].concat(odds,even);
// console.log(com);


// let colors = ['red', 'green', 'blue'];
// console.log(colors.length);
// colors.push('yellow');
// console.log(colors.length);
// console.log(colors);
// colors=[];
// console.log(colors.length);
// //sparse array
// const fruits = ['Apple', 'Orange', 'Strawberry'];
// fruits.length = 5;
// console.log(fruits)



//push()
// let number = [10, 20, 30];

// const length = number.push(40);

// console.log(length);
// console.log(number);


// let colors = ['red', 'green', 'blue'];
// let cmyk = ['cyan', 'magenta', 'yellow', 'back'];
// for(const color of cmyk){
//    colors.push(color);
// }
// console.log(colors);


// let colors = ['red', 'green', 'blue'];
// let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

// colors.push(...cmyk);
// console.log(colors);
// colors.push(cmyk);

// console.log(colors);



// let greeting={
//    0:"Hi",
//    1:'Hello',
//    length:2,
//    append(message){
//       [].push.call(this,message);
//    }
// };

// greeting.append("jfjjf");
// greeting.append("jfjjf");
// greeting.append('jsjjs');
// greeting.append('jsjjs');
// console.log(greeting);




// let greeting={
//    0:"Hi",
//    1:'Hello',
//    length:2,
//    append(){
//       [].push.call(this,...arguments);
//    }
// };

// greeting.append("jfjjf",'ddd','sskksks');
// console.log(greeting);



// closure example

// function calculate(x) {
//    function multiply(y) {
//        return x * y;
//    }
//    return multiply;
// }

// const multiply3 = calculate(3);
// const multiply4 = calculate(4);

// console.log(multiply3); // returns calculate function definition
// console.log(multiply3()); // NaN

// console.log(multiply3(6)); // 18
// console.log(multiply4(2)); // 8

// let aa = 0;
// function sum() {
//     function increaseSum() {

//         // the value of a is increased by 1
//         return aa = aa + 1;
//     }
//     return increaseSum;
// }

// const x = sum();
// console.log(x()); // 1
// console.log(x()); // 2
// console.log(x()); // 3
// aa = aa + 1;
// console.log(aa); // 4


// let a = 0;
// function suum() {
 
//    function increaseSum() {

//        // the value of a is increased by 1
//        return a = a + 1;
//    }
//    return increaseSum;
// }

// let x = suum();
// console.log(x()); // 1
// console.log(x()); // 2
// a=a+6
// console.log(a); // 6




// function suum() {
//    let a = 0;
//    function increaseSum() {

//        // the value of a is increased by 1
//        return a = a + 1;
//    }
//    return increaseSum;
// }

// let x = suum();
// console.log(x()); // 1
// console.log(x()); // 2


// console.log(a); // 6
//closure function that have access to varible that ae present in ththeir scope chain even if outer function cease to exist




/*
closure Defination:
1)this is function bundler together or enclosed with lexical scope.
2)give access from outer function scope to inner function
3)when creation function every time ,closure are created
*/
//lexical scope
// var name="Mozilla";
// function init(){
 
//    function displayName(){//inner function is closure
      
//       console.log(name); //use varible declared from parent function
//    }
//    displayName();
// }
// init();

// function makeFunc() {
//    var name = 'Mozilla';
//    function displayName() {
//      alert(name);
//    }
//    return displayName;
//  }
 
//  var myFunc = makeFunc();
//  myFunc();




// function makeAdder(x) {
//    return function(y) {
//      return x + y;
//    };
//  }
 
//  var add5 = makeAdder(5);
//  var add10 = makeAdder(10);
 
//  console.log(add5(2));  // 7
//  console.log(add10(2)); // 12


//Higher order Function
// let swappingCases="elZERO";
// let sw=swappingCases.split("").map(function(ele){
//    return ele===ele.toUpperCase() ? ele.toUpperCase():ele.toLowerCase();
// }).join("");
// console.log(sw);

// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let inv = invertedNumbers.map(function (ele) {
//    return -ele;
//  });
//  console.log(inv);


/*filter*/
// let friends=['Ahmed',"ali","Amaged","Ola"];
// let filterFriends=friends.filter(function(el){
//    return el.startsWith("A")? true:false;
// });
// console.log(filterFriends);
// let numberrs=[11,20,2,5,17,10];
// let evenNumbers=numberrs.filter(function(el){
//    return el%2===0?true:false;
// })
// console.log(evenNumbers);



// let words="I loved you more than imagine";
// let wordsFilter=words.split(" ").filter(function(el){
//    return el.length <=4;
// }).join(" ");
// console.log(wordsFilter);

// let mix="ABCDS13";
// let mixedWord=mix.split(" ").filter(function(el){
//    return !isNaN(parseInt(el))
// })
// .map(function(el){
//    return el*el;
// });
// console.log(mixedWord)

//concat with array element into string with join()
// const cssClass=['btn','btn-primsar',"hoodh"];
// const btnClass=cssClass.join("_");
// console.log(btnClass);


// const title="javascript array join example";
// const url=title.split(' ').join("__").toLowerCase();
// console.log(url);

//array destructuring
// function getScores(){
//    return [70, 80,89,99];

// }
// let [x,y,...args]=getScores();
// console.log(x);
// console.log(y);
// console.log(args);
// let a,b;
// [a,b]=[10,20];
// console.log(a);
// console.log(b);

// let a, b;
// [a = 1, b = 2] = [10];
// console.log(a); // 10
// console.log(b); // 2



// function getProfile(){
//    return[
//       'john',
//       'Doe',
//       ['Red',"Green"]
//    ];
// }
//    let [
//       firstName,
//       lastName,
//       [
//           color1,
//           color2,
//           color3
//       ]
//   ] = getProfile();
  
//   console.log(color1, color2, color3); // Red Green Blue

//   const scores = [5, 6, 7];

// console.log(scores.at(1)); // same as scores[1] 

// // get the last element
// console.log(scores.at(-1)); // 7

// console.log(scores.at(-1) === scores[scores.length - 1]); // true

// let Doc=[10,20,30];
// let add=Doc.reduce(function(acc,current,index,arr){
// console.log(`Acc=>${acc}`);
// console.log(`current=>${current}`);
// console.log(`index=>${index}`);
// console.log(`Array => ${arr}`);
// console.log(acc + current);
// console.log(`#############`);
// return acc + current;
// },1);
// console.log(add)
// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];
//  let check=theBiggest.reduce(function(acc,current){
//    console.log(`Acc => ${acc}`);
//    console.log(`Current Element => ${current}`);
//    console.log(acc.length > current.length ? acc : current);
//    console.log(`#############`);
//    return acc.length > current.length ? acc : current;
//  });
//  console.log(check);



// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   }).reduce(function(acc,current){
//    return `${acc}${current}`;
//   })
// console.log(finalString);


//Returning nested function
// function sayMessage(fName,lName){
//    let message=`Hello`;
//    function concatMsg(){
//       message=`${message} ${fName} ${lName}`;
//    }
//    concatMsg();
//    return message;
// }
// console.log(sayMessage("Osama","ali"));
//Example 2

// function sayMessage(fName,lName){
//    let message=`Hello`;
//    //Nested Function
//    function concatMsg(){
//       return `${message} ${fName} ${lName}`
//    }
//    return concatMsg();
// }
// console.log(sayMessage("dhfhhf","hfufurr"));


// function sayMessage(fName,lName){
//    let message=`Hello`;
//    //Nested Function
//    function concatMsg(){
//       function getFullName(){
//          return `${fName} ${lName}`;
//       }
//       return `${message} ${getFullName()}`;
//     }
//     return concatMsg();
//   }
  
//   console.log(sayMessage("Osama", "Mohamed"));

/*
JSON.parse=> convert text Data to JS object.
JSON.stringfy=>convert JS object to stringfy.
*/
const myJsonObject='{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObject);
console.log(myJsonObject);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObject);
console.log(typeof myJsObject);
console.log(myJsObject);