const myStr = 'some string value';

let myNum = 456;


const array: stringNumBool[] = ['whatever' ,1,2,3,4,5, 'cat', 'dog'];


array.push('srtsdfgsdfg')
array.push(4563456);
array.push(true);

const first: number = array[0] as number;

type stringNumBool = number | string | boolean;



class User implements IUser {

  constructor(public name: string, public age = 99) {

  }

  sayHello(): void {
    console.log(`hello ${this.name}, I am ${this.age} years old`);
  }
}

class Person extends User {

  constructor(name: string, age: number, public eyeColor: string) {
    super(name, age);
  }
}


const user = new User('Bob');

user.sayHello();

interface IUser {
  name: string;
  age: number;
}

const person1: IUser = {
  name: 'Jason',
  age: 99,
};

person1.name = 'Bob';

const person = new Person('Sam', 23, 'red');

const stringArray = ['1', '3', '5', 'cat'];


function map<T, TResult>(array: T[], callback: (element: T, index: number) => TResult): TResult[] {
  const results: Array<TResult> = [];

  for (let index = 0; index < array.length; index++) {
    results.push(callback(array[index], index));
  }

  return results;
}

const things = map(stringArray, (element) => parseInt(element, 10));


const more = map(things, element => element * element);
