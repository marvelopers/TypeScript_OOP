{
  function checkNotNullNotGood(arg: number | null): number {
    if (arg == null) {
      throw new Error('Not a number')
    }
    return arg;
  }

  const result = checkNotNullNotGood(123);
  console.log(result);


  function checkNotNullGood<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error('Not a number')
    }
    return arg;
  }

  const number = checkNotNullGood(123);
  const boal: boolean = checkNotNullGood(true);
}