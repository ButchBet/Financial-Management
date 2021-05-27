"use stric"
//--------------------------------------------------------------------------------------------
class Driver{
    static driverCounter = 0;
    constructor(name, id, salary){
        this._name = name;
        this._id = id;
        this._salary = salary;
        this._idDriver = ++Driver.driverCounter;
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
        return `Driver >> regist ID: ${this._idDriver} | name: ${this._name} | id: ${this._id} | salary: ${this._salary}.`;
    }
}
//--------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------
class Owner{
    static ownerCounter = 0;
    constructor(name, id, phone){
        this._name = name;
        this._id = id;
        this._phone = phone;
        this._idOwner = ++Owner.ownerCounter;
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

    get phone(){
        return this._phone;
    }set phone(phone){
        this._phone = phone;
    }

    toString(){
        return `Owner >> regist ID: ${this._idOwner} | name: ${this._name} | id: ${this._id} | phone: ${this._phone}.`;
    }
}
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
class Taxi{
    static taxiCounter = 0;
    constructor(brand, model, plate, owner, driver){
        this._brand = brand;
        this._model = model;
        this._plate = plate;
        this._owner = owner;
        this._driver = driver;
        this._idTaxi = ++Taxi.taxiCounter;
    }

    get brand(){
        return this._brand;
    }set brand(brand){
        this._brand = brand;
    }

    get model(){
        return this._model;
    }set model(model){
        this._model = model;
    }

    get plate(){
        return this._plate;
    }set plate(plate){
        this._plate = plate;
    }

    get idTaxi(){
        return this._idTaxi;
    }

    toString(){
        return `Taxi >> ID: ${this._idTaxi}.\n${this._owner.toString()}\n${this._driver.toString()}`;
    }
}
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
class Cooperative{
    constructor(){
        this._taxi = [];
    }

    main(){
        let option = 0;

        while(option < 1 || option > 6){
            console.log(`  Menu Principal De Gestion de la cooperativa\n
            [ 1 ]. Ingresar datos.\n
            [ 2 ]. Buscar taxis de propietario.\n
            [ 3 ]. Determinar el total a pagar de los conductores.\n
            [ 4 ]. Identificar datos de un taxi.\n
            [ 5 ]. Buscar salario de conductor.\n
            [ 6 ]. Salir.`);
            alert("Ingresa la opcion");
        }

    }
}
//--------------------------------------------------------------------------------------------

let owner1 = new Owner("Kevin Alejandro Salazar", 1007213957, 3118818838);
let driver1 = new Driver("Alfredo Perst", 1007213957, 1500000);

let taxi1 = new Taxi("Mitzubishi", 2016, "UTF-8", owner1, driver1);

console.log(taxi1.toString());




let option = 0;

        while(option < 1 || option > 6){
            console.log(`  Menu Principal De Gestion de la cooperativa\n
            [ 1 ]. Ingresar datos.\n
            [ 2 ]. Buscar taxis de propietario.\n
            [ 3 ]. Determinar el total a pagar de los conductores.\n
            [ 4 ]. Identificar datos de un taxi.\n
            [ 5 ]. Buscar salario de conductor.\n
            [ 6 ]. Salir.`);
            option = Number(prompt("Ingresa la opcion"));
        }
