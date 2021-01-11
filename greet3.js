function greetr(){
    this.greeting = "Hello World3";
    this.greet = function(){
        console.log(this.greeting);
    }
}


module.exports = new greetr();