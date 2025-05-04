import Car from "./carmodule.js";
class flyingCar extends Car {
    constructor(model,year){
        super(model,year);
        this.canFly = true;
    }
    toString(){
        console.log(`This is a flying car and the model is ${this.model} and year is ${this.year}`);
    }
}
export default flyingCar;