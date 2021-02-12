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

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private ice: IceProvider,
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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
      const coffee = this.extract(shots);
      const milkAdded = this.milk.makeMilk(coffee);
      return this.ice.addIce(milkAdded);
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface IceProvider {
    addIce(cup: CoffeeCup): CoffeeCup;
  }

  // 성능이 좋지 않은 우유 거품기
  class NotGoodMilkSteamer implements MilkFrother {
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


  // 성능이 좋은 우유 거품기
  class BestMilkSteamer implements MilkFrother {
    private steamsMilk(): void {
      console.log('Best Steaming Milk 🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamsMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 차가운 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamsMilk(): void {
      console.log('Cold Steaming Milk 🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamsMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 제빙기 
  class AutomaticIceMaker implements IceProvider {
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
  // 작은 얼음 제빙기 
  class AutomaticSmallIceMaker implements IceProvider {
    private getIce() {
      console.log('Getting some small ice from icebox 🧊');
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

  class NoIce implements IceProvider {
    addIce(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 우유 거품기 3종류
  const notGoodMilkSteamer = new NotGoodMilkSteamer();
  const bestMilkSteamer = new BestMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // 큰 얼음과 작은 얼음 제빙기
  const iceMaker = new AutomaticIceMaker();
  const smallIceMaker = new AutomaticSmallIceMaker();
  const noIce = new NoIce();

  // => 아이스 라떼 머신 종류 4가지 출시!
  const lowPriceIceLatteMachine = new CoffeeMachine(10, notGoodMilkSteamer, iceMaker);
  const BestIceLatteMachine = new CoffeeMachine(10, coldMilkSteamer, iceMaker);
  const lowPriceSmallIceLatteMachine = new CoffeeMachine(10, notGoodMilkSteamer, smallIceMaker);
  const BestSmallIceLatteMachine = new CoffeeMachine(10, coldMilkSteamer, smallIceMaker);

  // CoffeeMachine 출시!
  const iceCoffeeMachine = new CoffeeMachine(10, noMilk, iceMaker);
  const latteMachine = new CoffeeMachine(10, bestMilkSteamer, noIce);
  const iceLatteMachine = new CoffeeMachine(10, notGoodMilkSteamer, iceMaker);
}