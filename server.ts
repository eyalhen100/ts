

class Validator {
  fullName: String;
  constructor(public firstName: String, public lastName: String) {
      this.fullName = firstName + " " + lastName;
  }


  inRange(val: Number, from: Number, to: Number) {
    console.log("inRange: "+((val <= to) && (val >= from)));    
  }
}

function test() {
  console.log("function: "+"test function");  
}

var student: Validator = new Validator("Eyal", "Hen");

// ranege velidation test
student.inRange(5, 1, 23);

// function test
test();
