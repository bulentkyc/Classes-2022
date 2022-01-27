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

    roles = ['manager', 'trainer', 'assistant', 'attendee'];

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

    printRoles(){
        console.log(this.roles);
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

///////////////////////////////////////////////////////////////////

testCompany.printRoles();
console.log(testCompany.roles);

///////////////////////////////////////////////////////////////////
//Prototype of the Classes
//Only mothods places on the prototype of the class.
//Properties doesn't stays on the prototype. Directly places on the instances.
//Prototype of classes get deeply cloned to all individual instances.

console.log(CourseCreator.prototype);

///////////////////////////////////////////////////////////////////
//Extending Classes - Class inheritance

class MyGenerator extends CourseCreator{

    constructor(...args){
        super(...args)
        console.log('New Course is iniated!');
    }

    crossCheck(){
        console.log(true);
    }

    printRoles(){
        super.printRoles();
        console.log('Roles are changed! Ha Ha Ha it was a joke that is not funny :((');
    }
}

const theNextGen = new MyGenerator();

theNextGen.printRoles();

///////////////////////////////////////////////////////////////////

