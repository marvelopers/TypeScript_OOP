{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
  };

  const BEANS_GRAM_PER_SHOT:number = 10
  let coffeeBeans: number = 0;

 function makeCoffee(shots: number): CoffeeCup{
  if(coffeeBeans < shots * BEANS_GRAM_PER_SHOT){
    throw new Error('Please check coffee beans!')
  } 
  coffeeBeans -= shots * BEANS_GRAM_PER_SHOT
  return{ 
    shots,
    hasMilk: false,
   }
 }

 coffeeBeans += 10 * BEANS_GRAM_PER_SHOT; 
 const coffee = makeCoffee(2);
 console.log(coffee);
}