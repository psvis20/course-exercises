// //Evaluate these:
// //#1
// [2] === [2] 
// console.log({} === {}) 

// //#2 what is the value of property a for each object.
// const object1 = { a: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { a: 5}; 
// object1.a = 4;
// console.log("1",object1)
// console.log("2",object2)
// console.log("3",object3)
// console.log("4",object4)
//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor (name1, type, color) {
        this.name1 = name1
        this.type = type
        this.color = color
    }
}

class Mamal extends Animal{
    constructor (name1, type, color) {
        super(name1, type, color)
    }
    moo() {
        console.log(`moo moo${this.name1}oo mooo${this.type}o moo moo${this.color}oo moo`)
    }
}

const cow = new Mamal("milka", "cokoladno mleko", "purple")

