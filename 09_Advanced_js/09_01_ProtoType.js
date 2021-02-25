// Prototype-based Programming 
/* a style of OOP 
 * behavior reuse(inheritance)
 * by reusing existing objects
 * the serve as 'prototype'
 */

 const x = {}
 const y = {}
//  js는 object라는 prototype를 (상속)가지고 있다. 
 console.log(x)
 console.log(y)
 console.log(x.__proto__ === y.__proto__) // true

//  array도 object. 
const array = [];
console.log(array)

function CoffeeMachine(beans){
  this.beans = beans;
  // Instance mamber level
  // this.makeCoffee = (shots) => {
  //   console.log('making...');
  // }
}

// ProtoType member level
CoffeeMachine.prototype.makeCoffee = () =>{
  console.log('making...');
};
const Machine1  = new CoffeeMachine(10);
const Machine2  = new CoffeeMachine(20);

console.log(Machine1);
console.log(Machine2);

function LatteMachine(milk){
  this.milk = milk;
}

// Prototype을 통한 상속
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log('latteMachinee', latteMachine);
latteMachine.makeCoffee();