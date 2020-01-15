
class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}
const e = new Employee("jack",350,"alskgj@gmail.com");

e.getRole();

module.exports = Employee;