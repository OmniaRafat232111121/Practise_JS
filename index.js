
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
let a="Elzero web school";
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

/*js scope*/