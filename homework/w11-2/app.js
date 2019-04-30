// let name = "hellow";
// console.log("Name = ",name);

function Person(name, dob) {
    //birthday = new Date(dob);
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.name);
console.log("Name = ",name);
console.log(brad);
console.log(brad.calculateAge());