// interface : 규격 사항 API 
// type: data의 type을 결정 하는 것

//  type vs interface

type PositionType = {
  x: number;
  y: number;
}
interface PositionInterface {
  x: number;
  y: number;
}

// Object class Extends

// Extends
interface ZPositionInterface extends PositionInterface {
  z:number
}
type ZPositionType = PositionType & { z:number }

// interface 만 결합이 가능하다.
// only type
type Person ={
  name: string,
  age: string
} 

type Name = Person['name']; //string
type NumberType = number;
type Direction = 'TOP' | 'DOWN'

