const Employee = require('./Employee')
class Engineer extends Employee{
    constructor(name, id, email, git ){
        super(name, id, email,);
        this.git  = git;
        
    }
    getGit(){
        return this.Git;
    }    
    getRole(){ 
        return 'Engineer';
    }
}
module.exports = Engineer