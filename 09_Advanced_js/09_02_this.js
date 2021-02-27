// global 환경에서는 window가 this
console.log(this)

function simpleFunc(){
  console.log(this)
}

simpleFunc();

class Counter{
  count = 0;
  increase = function () {
    console.log(this);
  }
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;
caller(); // undefined

class Chloe {}
const chloe = new Chloe();
chloe.run = counter.increase;
chloe.run(); // this는 다른 곳으로 할당하는 순간 잃어버리게 됨
// bind을 활용해야 this를 유지할 수 있음 or ()=>{}활용해야 함 

const callerB = counter.increase.bind(counter);
callerB(); // counter

