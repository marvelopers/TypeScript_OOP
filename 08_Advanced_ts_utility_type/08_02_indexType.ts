{
  const obj ={
    name : 'chloe',
  }

  obj.name; //chloe
  obj['name']; //chloe

  type Animal = {
    name : string;
    age: number;
    type : 'Dog' | 'Cat';
  }

  type Name = Animal['name']; // string

  const text : Name = 'string'

  type AnimalType = Animal['type'];

  type Keys = keyof Animal; //name | age | type;

  const key : Keys = 'age';

  type Person = {
    name : string;
    petType: Animal['type'];
  }
}