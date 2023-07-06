console.log("Hello World!\n==========\n");

// Exercise 1 Section

class Person{
  constructor (name, pets, residence, hobbies){
  this.name = name;
  this.pets = pets;
  this.residence = residence; 
  this.hobbies = hobbies;
}
info(){
    console.log('name: ${this.name}');
    console.log('pets: ${this.pets}');
    console.log('residence: ${this.residence')};
    console.log('hobbies: ${this.hobbies'); 
} 
soundOff(){
console.log("SoundOff");
}
addHobby(newHobby) {
    this.hobbies.push(newHobby);
}
removeHobby(hobby) {
    const index = this.hobbies.indexof(hobby);
    if (index == -1 ){
        this.hobbies.splice(index, 1);
console.log(hobby);
}

}

// Exercise 2

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
      super(name, pets, residence, hobbies);
      this.occupation = "Full Stack Web Developer";
    }
  
    greeting() {
      console.log(`Hello, I'm ${this.name}, a ${this.occupation}. Nice to meet you!`);
    }
  }
  //Exercise 3

  
let person = new Person("Alex", 1, "Pittsburgh", ["Reading", "Traveling"]);

person.greeting(); 
console.log(person.name);  
console.log(person.pets);  
console.log(person.residence);  
console.log(person.hobbies);  

let coder = new Coder("John", 0, "San Francisco", ["fishing", "Hiking"]);

coder.greeting();  
console.log(coder.name);  
console.log(coder.pets);  
console.log(coder.residence);  
console.log(coder.hobbies);  




//exercise 4

class calculator {
constructor() { 
    this.result = 0;
}

add (a, b = this.result) {
    this.result = a + b;
    return this.result;
}
 subtract (a, b = this.result){
    this.result = a - b;
    return this.result;
 }
multiply (a ,b = this.result){
    this.result = a * 
    return this.result;
}
divide (a, b = this.result){
    this.result = a / b;
    return this.result;
}
displayResult () {
console.log(Result: ${this.result});

}
