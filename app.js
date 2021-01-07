var person = {
    firstname:'Vijay',
    lastname:'Gupta',
    welcome: function(){
        console.log(this.firstname+" "+this.lastname);
    }
}


person.welcome();

console.log(person['firstname']);