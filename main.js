//Classes
//Syntax & Anatomy:

class MyFirstClass {
    constructor(){
    }
    method1() {    
    }
    method2() {
    }
}
console.log(typeof MyFirstClass);
console.dir(MyFirstClass);

class CarModel {
    //Constructor is executed as oon as there's a new instance
    constructor(engine) {
        console.log('Constructor is executed!');
        this.engine = engine;
    }

    startEngine() {
        console.log('Engine is started');
    }

    stopEngine() {
        console.log('Engine is stoped');
    }

    autoParking() {
        console.log('The car is parked');
    }
}

const myFirstCar = new CarModel('3000cc'); // Instance
//Instances are totaly independent from each others and the class

myFirstCar.startEngine();
myFirstCar.autoParking();
myFirstCar.stopEngine();

console.log(myFirstCar);
console.log(CarModel);

///////////////////////////////////////////////////////////////////

class CourseCreator {
    constructor(companyName) {
        this.companyName = companyName;
    }

    createCourse(){
    }

    getCompanyName(){
        console.log(this.companyName);
    }

    updateCompanyName(newCompanyName){
        this.companyName = newCompanyName;
    }

    showMeThis(){
        console.log(this);
    }
}

console.log(CourseCreator);

///////////////////////////////////////////////////////////

const essence = new CourseCreator('Essence');

console.log(essence);

essence.getCompanyName()

///////////////////////////////////////////////////////////

const testCompany = new CourseCreator('Carlos & Co')

console.log(testCompany);

testCompany.updateCompanyName('DCI');

console.log(testCompany);

///////////////////////////////////////////////////////////

//Show Me this:
console.log('this keyword');
essence.showMeThis();
testCompany.showMeThis();
