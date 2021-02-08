{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
  };

  // public | private | protected

  class CoffeeMaker {
    private static  BEANS_GRAM_PER_SHOT:number = 10 
    private coffeeBeans: number = 0;
  
    constructor(coffeeBeans : number){
      this.coffeeBeans = coffeeBeans;
    }
    
    static makeMachine(coffeeBeans: number):CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    
    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error('value for beans should be greater than 0!')
      }
      this.coffeeBeans += beans;
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
  const useMachine = CoffeeMaker.makeMachine(2);
}