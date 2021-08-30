type Check<T> = T extends string? boolean : number;
type Type = Check<string>; //boolean

// 타입에 따른 타입 정의
type TypeName<T> = T extends string ? 'string' 
  : T extends number ? 'number' 
  : T extends boolean ? 'boolean' 
  : T extends undefined ? 'undefined' 
  : T extends Function? 'function' 
  : object

 type ex01 = TypeName<string> //string
 type ex02 = TypeName<'a'> //string