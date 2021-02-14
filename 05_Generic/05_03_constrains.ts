interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('Full time!');
  }
  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('Part time!');
  }
  workPartTime() {

  }
}

function payBest<E extends Employee>(employee: E): E {
  employee.pay();
  return employee;
}

// 세부적인 타입을 인자로 받아 추상적인 타입으로 다시 리턴하는 함수 💩💩💩
function payFoo(employee: Employee): Employee {
  employee.pay();
  return employee;
}

const chloe = new FullTimeEmployee();
const bob = new PartTimeEmployee();

chloe.workFullTime();
bob.workPartTime();

const chloeAfterPay_ = payFoo(chloe);
const bobAfterPay_ = payFoo(bob);


const chloeAfterPay = payBest(chloe);
const bobAfterPay = payBest(bob);


const obj = {
  name: 'chloe',
  age: 27,
}

const objAnimal = {
  animall: '🐯'
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name'));