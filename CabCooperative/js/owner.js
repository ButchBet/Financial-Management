export default class Owner{
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
        return `name: ${this._name} | id: ${this._id} | phone: ${this._phone}.`;
    }
}
