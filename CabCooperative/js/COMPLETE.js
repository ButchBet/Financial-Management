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
    constructor(brand, model, plate, sizeEngine, owner, driver){
        this._brand = brand;
        this._model = model;
        this._plate = plate;
        this._sizeEngine = sizeEngine;
        this._owner = owner;
        this._driver = driver;
        this._idTaxi = ++Taxi.taxiCounter;
    }

    get owner(){
        return this._owner;
    }

    get driver(){
        return this._driver;
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

    get sizeEngine(){
        return this._sizeEngine;
    }set sizeEngine(sizeEngine){
        this._sizeEngine = sizeEngine;
    }

    get idTaxi(){
        return this._idTaxi;
    }

    toString(){
        return `Taxi >> ID: ${this._idTaxi} | brand: ${this.brand} | plate: ${this.plate} | model: ${this.model} | size of the engine ${this.sizeEngine}.\n${this._owner.toString()}\n${this._driver.toString()}`;
    }
}
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
class Cooperative{
    constructor(){
        this._taxi = [];
    }

    get taxi(){
        return this._taxi;
    }

    main(){
        console.clear();
        let option = 0;

        while(option < 1 || option > 6){
            console.log(`\n\n\n\n\n\n\n\n\n\n\n\n Main menu\n
            [ 1 ]. Enter data.\n
            [ 2 ]. Search taxi owner.\n
            [ 3 ]. Calculate the total payment for the drivers.\n
            [ 4 ]. Identify the taxi data.\n
            [ 5 ]. Search a driver payment.\n
            [ 6 ]. Leave.`);
            /* Control to catch the posible Nan error */ 
            try{
                if(isNaN(option = Number(prompt("Ingresa la opcion")))) throw "";
            }catch(error){
                this.main();
                return;
            }
        }

        /* Control the posible input an its defined output */
        console.clear();
        if(option == 1){
            this.enterData();
        }else if(option == 6){
            alert("Leaving...");
            return;
        }else if(this._taxi.length == 0){
            alert("No data entered");
        }else{
            switch(option){
                case 2:
                    this.searchOwner();
                    break;
                case 3:
                    this.totalToPay();
                    break;
                case 4:
                    this.taxiData();
                    break;
                case 5:
                    this.driverSalary();
                    break;
            }
        }
        alert("Press enter to continue");
        this.main();
    }

    // 1
    enterData(){
        let phone, name, id, salary, brand, model, plate, sizeEnginee, owner, driver, taxi;

        /*
        // Owner data
        name  = prompt("Enter the name of the owner");
        id  = prompt("Enter id of the owner");
        phone  = prompt("Enter the phone of the owner");

        owner = new Owner(name, id, phone);

        // Driver data
        name  = prompt("Enter the name of the driver");
        id  = prompt("Enter id of the driver");
        salary  = prompt("Enter the salary of the driver");

        driver = new Driver(name, id, salary);

        // Taxi data
        brand = prompt("Enter the brand of the car");
        model = prompt("Enter the model of the car");
        plate = prompt("Enter the plate of the car");
        sizeEnginee = prompt("Enter the size of the engine"); */
        driver = new Driver("Kevin Alejandro Salazar", "1007213957", "1500000");
        owner = new Owner("Camilo Torres", "1007213957", "3118818838");

        taxi = new Taxi("Mitsubishi", "2010", "UTF-8", "200", owner, driver);

        this._taxi.push(taxi);
    }

    // 2
    searchOwner(){
        let found, id, i;

        found = true;
        id = prompt("Enter the id");

        for(i = 0; i < this.taxi.length; i++){
            if(this.taxi[i].owner.id.localeCompare(id) == 0){
                console.log("\n\n\n\n\n");
                console.log(this.taxi[i].owner.toString());
                found = false;
                break;
            }
        }

        if(found){
            alert("Error, the id doesn't exit");
        }
    }

    // 3
    totalToPay(){
        let totalToPay, i;
        totalToPay = 0.0;

        for(i = 0; i < this.taxi.length; i++){
            totalToPay += parseFloat(this.taxi[i].driver.salary);
        }

        alert("The total to pay is: " + totalToPay);
    }

    // 4
    taxiData(){
        let option, found, i, id, plate;
        found = true;

        option = 0;

        while(option < 1 || option > 3){
            console.log(`\n\n\n\n\n\n\n\n\n\n\n\n Main menu\n
            [ 1 ]. By plate.\n
            [ 2 ]. By id (owner or driver).\n
            [ 3 ]. Back.`);

            try{
                if(isNaN(option = Number(prompt("Ingresa la opcion")))) throw "";
            }catch(error){
                this.taxiData();
                return;
            }
        }


        console.clear();
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n");
        if(option == 1){
            plate = prompt("Enter the vehicle's plate");

            for(i = 0; i < this.taxi.length; i++){
                if(!this.taxi[i].plate.localeCompare(plate)){
                    console.log(this.taxi[i].toString());
                    found = false;
                    break;
                }
            }

            if(found){
                console.clear();
                alert("Error, the plate doesn't exit");
                this.taxiData();
            }
        }
        else if(option == 2){
            id = prompt("Enter the id");
            for(i = 0; i < this.taxi.length; i++){
                if(!this.taxi[i].owner.id.localeCompare(id) || !this.taxi[i].driver.id.localeCompare(id)){
                    console.log(this.taxi[i].toString());    
                    found = false;
                    break;                        
                }
            }

            if(found){
                console.clear();
                alert("Error, the id doesn't exit");
                this.taxiData();
            }
        }
        else if(option == 3){
            this.main();
        }
        return;
    }

    // 5
    driverSalary(){
        let found, id, i;
        found = true;

        id = prompt("Enter the driver id");

        for(i = 0; i < this.taxi.length; i++){
            if(!this.taxi[i].driver.id.localeCompare(id)){
                alert("The salary to " + this.taxi[i].driver.name + ": " + this.taxi[i].driver.salary);
                found = false;
                break;
            }
        }

        if(found){
            console.clear();
            alert("The id doesn't exist");
            this.driverSalary();
        }
    }
}
//--------------------------------------------------------------------------------------------

let cooperative = new Cooperative();
cooperative.main();



