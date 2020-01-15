const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github;
        this.role = 'Engineer'
    }
    getGithub(){
        return this.github;
    }
}

//var en = new Engineer('jack',300,'ya@mail.com','waterfall');

module.exports = Engineer;