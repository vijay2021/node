function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

person.prototype.welcome = function(){
    console.log("Welcome, "+ this.firstname +" "+ this.lastname);
}


var john = new person('Vijay','Gupta');
console.log("Hello, "+ john.firstname+" "+john.lastname);

john.welcome();

var jene = new person('Ram', 'Kumar');

jene.welcome();

console.log(john.__proto__);
console.log(jene.__proto__);