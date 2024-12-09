/*var fruitname="apple"
var count=100
var price=76
var total=count*price
console.log(total)
console.log(fruitname)

function hi(){
    console.log("wassap");
  }
  hi()

function iphone(){
    console.log("this is  iphone");
}  
iphone()

function add(){
    a=10
    b=20
    c=a+b
    console.log(c)
}
add()


var price=100
var product= "car"
var tax=18
console.log(product)
add()
iphone()


var factor="vj"
var fply="vk"
var fmov="leo"
function fav(){
    console.log("fav actor:",factor);
    console.log("fav ply:",fply);
    console.log("fav mov:"+fmov);
}
fav()

function area(len,breath){
    var a=len*breath
    console.log("Area is :",a);
    
}
area(23,46)


function ret(a,b){
    return a+b;
}
var c=ret(10,20)
console.log(c)

var rain=false
if(rain)
{
    console.log("rain is coming")
}else{
    console.log("no rain")
}

var hw=true
if(hw){
    console.log("good")
}else{
    console.log("bad")
}

var season="rain"
if(season=="summer"){
    console.log("enjoy sun")
}
if(season=="spring"){
    console.log("enjoy spring")
}
if(season=="rain"){
    console.log("enjoy rain")
    
}

var score=69
if(score>=80){
    console.log("good")
}
else if(score>65 || score<70){
    console.log("nice")
}
else if(score >40){
    console.log("ok")
}else{
    console.log("fail")
} 

    for(i=10;i>=1;i--)
    {
        console.log(i)
    }
    for(i=1;i<=10;i++)
        {
            console.log("2 X "+i+"="+(2*i))
        }
       for(i=1;i<=10;i+=2)
       {
        console.log(i)
       }

       
      var a=[1,2,3,4,'hi']
      console.log(a)

      console.log(a[4])
      var b=a[1]
      console.log(b)

      a[1]="sk"
      console.log(a)

      console.log(a.length)
      a.pop()
      console.log(a)

      a.push("ks")
      console.log(a)

      var b=a.shift()
      console.log(b)
      console.log(a)

      a.unshift(100)
      console.log(a)
      
      var person={
        firstname :"sri",
         lastname  : "kanth",
         age : 19
      }
      console.log(person)
      console.log(person.lastname)
      console.log(person["age"])
      
      var cars={
        model:2020,
        brand:["bmw",'audi',"benz"],
        price:12313312344,
        address:{
            state:'tn',
            district:'tup',
            town:{
                area:'udt'
            }
        }
      } 
      console.log(cars)
console.log(cars.brand[1])
console.log(cars.address.town.area)
cars.model=1212

cars.from='china'
console.log(cars)

delete cars.price
console.log(cars) 
var i=1
while(i<=5){
    console.log(i)
    i++
}
for(i=10;i>=1;i--){
    console.log(i)
}

var person={
    name:"sri",
    age:19,
    weight:78

}
for(var key in person){
    console.log(key,':',person[key])
}
var score=[12,34,56,76,32]
for(var key of score){
    console.log(key)
}
for(var [index,key] of score.entries()){
    console.log(index,key)
}
var str="hello"
for(var c of str){
    console.log(c)
}
var arr=[10,15]
for(var key of arr){
    key=key+10
    console.log(key)
}

function add(a,b){
    console.log(a+b)
}
add(2,3)

var sa=function(a,b)
{
    return a-b
}
var sum=sa(3,2)
console.log(sum)

let a='hi'
console.log(`my age ${a}
    kjhg jgk
    hgvjkgjkfg`)

var hi='ks'
for(var i=0;i<10;i++){
    console.log(hi)
}

let arr=['hi','i','am','sk']
//let b=arr[1]
//let c=arr[2]
//console.log(b,c)
//console.log(c)
let[a,b,c,d]=arr
console.log(c)

let person={
    name:'sk',
    age:19,
    gen:'male'
}
let {name:t,age:u,gen:p}=person
console.log(t)
console.log(u)
console.log(p)



function add(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function mul(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a/b)
}

module.exports={
    addition:add,
    subtraction:sub,
    multiple:mul,
    division:div
}

// calc.js
function addition(a, b) {
  return a + b;
}

module.exports = {
  addition,
};

let calr = (a) => ((a * a) & (2 == 0) ? true : false);
console.log(calr(2));

function captain(leader,cb) {
  console.log(leader);
  cb('ironman')
}


function cap(lea) {
    console.log(lea);
  }
 
  captain("america",cap);

  function hangoodbye(){
    console.log(`good bye ${myname}`)
  }
function greet(myname){
    console.log( `hello ${myname}`)
 setInterval(hangoodbye,3000,myname );
}
 greet('srikanth')

function greet(myname, cb) {
  console.log(`hello ${myname}`);
  cb(myname);
}
function hangoodbye(myname) {
  console.log(`good bye ${myname}`);
}

greet("srikanth", hangoodbye);

let num = [1, 2, 3, 4, 5];
let square = [];
for (i = 0; i <= num.length; i++) {
  square.push(num[i] * num[i]);
}
console.log(square);

let sum = [1, 2, 3, 4, 5];
let sqr = sum.map(function (n) {
  return n * n;
});
console.log(sqr);

let inr=[12,23,45]
let dlr=inr.map(x => x*83)
console.log(dlr)

let rs=[12,34,56,7]
let sr=rs.find(n => n<10)
console.log(sr)

let srind=rs.findIndex(n => n<10)
console.log(srind)

// without filter method
let number = [12, 34, 2, 7, 9, 3]
let even = []
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        even.push(number[i])
    }

}
console.log(even)

//filter

let number = [12, 34, 2, 7, 9, 3]
let even = number.filter(function(n){
    return n%2==0
})
console.log(even)



let money=[123,4323,345,3213,546,123,3232]
let underthou=money.filter(n => n<1000)
console.log(underthou)

let arr=[11,3,5,2,6]
let total=arr.reduce(function (acc,total){
    let sk= acc+total
    return sk
},0)
console.log(total)

// cahining method 
var person=[
{ name:'a',age:12,gen:'M'},
{ name:'b',age:12,gen:'f'},
{ name:'c',age:16,gen:'M'},
{ name:'d',age:17,gen:'f'},
{ name:'e',age:32,gen:'M'},
]

var male=person.filter(function(obj){
    return obj.gen=='M';

}).map(function(ages){
    return ages.age
})
console.log(male)

var ages=person.map(function(ages){
    return ages.age
})
console.log(ages) 

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]
const positive=transactions.filter(function(n){
    return n>0

})
console.log(positive)

const total=positive.reduce(function(a,b){
    return a+b

},0)
console.log(total)

// cahining method
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]
const positive=transactions.filter(function(n){
    return n>0

}).reduce(function(a,b){
    return a+b

},0)
console.log(positive)

let user={
    name:'sk',
    login(){
        console.log('hi',this.name)
        console.log('welcome')
    }
}
user.login()

class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    login() {
        console.log('hi', this.name)
        console.log('welcome')
    }
}
let personone = new Users("sk", 19)
let persontwo = new Users('ks',20)
personone.login()
persontwo.login()


function user(a, b) {
    this.name = a;
    this.age = b;
   this.score = function () {
        console.log('score is 100');
    };
}

let sk = new user('sk', 12);
let ks = new user('ks', 13);

console.log(sk.score(), ks);




function car(a,b){
    this.name=a
    this.com=b
}
let bmw= new car('bmw','audi')
console.log(bmw)



let arr=[1,2,3,4]
let name=[...arr]
console.log(name)*/

// let jsonStr='{"greet":"hello"}'
// JSON.parse(jsonStr)

// function concatStrings(str1,str2){
    // return str1+str2
// }
// expect(concatStrings("ab","cd")).toBe("abcd")

let sum=(a,b)=>{
    return a+b
}

console.log(sum(1,2))


function fact(n){
    if(n==1)
        return 1
    return n*fact(n-1)
}
console.log(fact(5))