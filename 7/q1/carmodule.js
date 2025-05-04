class Car{
    constructor(model,year){
        this.model = model;
        this.year = year;
    }
    toString(){
        console.log(`Car model is ${this.model} and the year is ${this.year}`);
        
    }
}

export default Car;