export default class Driver{
    static driverCounter = 0;
    constructor(name, id, salary){
        this._name = name;
        this._id = id;
        this._salary = salary;
        this._idOwner = ++Driver.driverCounter;
    }

    get name(){
        return this._name;
    }set name(name){
        this._name = name;
    }

    get id(){
        return this._id;
    }set id(id){
        this._id = id;
    }

    get salary(){
        return this._salary;
    }set salary(salary){
        this._salary = salary;
    }

    toString(){
        return `name: ${this._name} | id: ${this._id} | salary: ${this._salary}.`;
    }
}