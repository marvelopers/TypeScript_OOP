//  Favor Composition over inheritance
{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
    hasIce?: boolean,
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
  // 성능이 좋지 않은 우유 거품기
  class NotGoodMilkSteamer {
    private steamsMilk(): void {
      console.log('Steaming Milk 🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamsMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 제빙기 
  class AutomaticIceMaker {
    private getIce() {
      console.log('Getting some ice from icebox 🧊');
      return true;
    }
    addIce(cup: CoffeeCup): CoffeeCup {
      const ice = this.getIce();
      return {
        ...cup,
        hasIce: ice,
      }
    }
  }

  class LatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: NotGoodMilkSteamer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class IceCoffeeMachine extends CoffeeMachine {
    constructor(beans: number, private ice: AutomaticIceMaker) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.ice.addIce(coffee);
    }
  }


  // composition을 통해 코드의 재사용성을 높힘!
  class IceLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: NotGoodMilkSteamer,
      private ice: AutomaticIceMaker
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const milkAdded = this.milk.makeMilk(coffee)
      return this.ice.addIce(milkAdded);
    }
  }


  const notGoodMilkSteamer = new NotGoodMilkSteamer();
  const iceMaker = new AutomaticIceMaker();

  const iceCoffeeMachine = new IceCoffeeMachine(10, iceMaker);
  const latteMachine = new LatteMachine(10, 'LATTE', notGoodMilkSteamer);
  const iceLatteMachine = new IceLatteMachine(10, notGoodMilkSteamer, iceMaker);
}