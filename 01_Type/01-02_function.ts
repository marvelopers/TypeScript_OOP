{
  // function
  function add(num1:number, num2:number):number{
    return num1+num2;
  }

  function fetchNum(id:string):Promise<number>{

    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }

  // Optional parameter
  function printName(firstName: string, middleName?: string, lastName:string){
    return firstName+middleName+lastName
  }

  // Default parameter
  function printMessage(message: string = 'default message'){
    console.log(message)
  }

  // Rest Parameter
  function addNumbers(...numbers:number[]):number{
    return numbers.reduce((a,b)=>a+b)
  }
}