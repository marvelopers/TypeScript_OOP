{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }


  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 10
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0!')
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine 🧼')
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Please check coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`)
      return {
        shots,
        hasMilk: false
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class LatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamsMilk(): void {
      console.log('Steaming Milk 🥛')
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamsMilk();
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  const machine = new CoffeeMachine(49);
  const latteMachine = new LatteMachine(49, 'CHLOE');
  const coffee = latteMachine.makeCoffee(1);

}