{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
  };

  class CoffeeMaker {
    static  BEANS_GRAM_PER_SHOT:number = 10 //class level
    coffeeBeans: number = 0;//instance (Object) level
  
    constructor(coffeeBeans : number){
      this.coffeeBeans = coffeeBeans;
    }
    
    static makeMachine(coffeeBeans: number):CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    } 

   makeCoffee(shots: number): CoffeeCup{
    if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
      throw new Error('Please check coffee beans!')
    } 
    this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
    return{ 
      shots,
      hasMilk: false,
     }
   }
  }
  const maker = new CoffeeMaker(88);
  const makerUseMachine = CoffeeMaker.makeMachine(2);
}