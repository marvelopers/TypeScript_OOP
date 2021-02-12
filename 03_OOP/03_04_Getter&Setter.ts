{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastNeme}`;
    }
    private internalAge = 20;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastNeme: string) {
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log('user');

}