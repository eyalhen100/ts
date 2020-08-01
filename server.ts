

class Student {
  fullName: String;
  constructor(public firstName: String, public lastName: String) {
      this.fullName = firstName + " " + lastName;
  }

  validateRange(val: Number, from: Number, to: Number) {
    console.log(((val <= to) && (val >= from)));
    
  }
}

function test() {
  console.log("test function");  
}

var student: Student = new Student("Eyal", "Hen");
student.validateRange(5, 1, 23);

test();
