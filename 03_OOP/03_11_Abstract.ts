{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
    hasIce?: boolean,
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // abstract 추상적인 클래스로 별도의 객체를 생성할 수 없음
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 10
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      this.steamsMilk();
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class IceCoffeeMachine extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: false,
        hasIce: true,
      }
    }
  }

  const machines = [
    new LatteMachine(10, 'Latte'),
    new IceCoffeeMachine(10),
  ]

  const latteMachine = new LatteMachine(49, 'CHLOE');
  const coffee = latteMachine.makeCoffee(1);


  machines.forEach(machine => {
    console.log('---------------------');
    machine.makeCoffee(1);
  })
}