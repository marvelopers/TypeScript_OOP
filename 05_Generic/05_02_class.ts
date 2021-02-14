
interface Either<L, R> {
  left: () => L;
  right: () => R;
}
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) { }

  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either = new SimpleEither(8, 10);
const best = new SimpleEither({ name: 'chloe' }, 'frontend');