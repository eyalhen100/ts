
interface Person {
  firstName: String;
  lastName: String;
}

class Student {
  fullName: String;
  constructor(public firstName: String, public middleInitial: String, public lastName: String) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }


  validateRange(val: Number, from: Number, to: Number) {
    return ((val <= to) && (val >= from));
  }


  getMessage()
  {




    return "Test \n" +
      "Range: " +
      this.validateRange(5, 1, 23);   
  }
}



function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}


//console.log(greeter(new Student("Eyal", "John", "Hen")));
console.log((new Student("Eyal", "John", "Hen")).getMessage());