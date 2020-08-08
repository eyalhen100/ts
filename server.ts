

class Validator {
  fullName: String;
  constructor(public firstName: String, public lastName: String) {
      this.fullName = firstName + " " + lastName;
  }


  inRange(val: Number, from: Number, to: Number): boolean {
    let g: boolean = ((val <= to) && (val >= from));
    console.log("inRange: " + g);
    return g;
  }

  isTrue(i: boolean):boolean {
    let g: boolean = false;
    console.log("isTrue: " + (g == i));
    return g == i;
  }

  isIn(s: string, sa: string[]) {
    for (let i of sa) {
      if (i == s) {
        console.log("isIn: "+true)
        return true

      }
    }
    console.log("isIn: "+false)
    return false
  }
}

function test() {
  console.log("function: "+"test function");  
}

var student: Validator = new Validator("Eyal", "Hen")


test() // function test
student.inRange(5, 1, 23) // ranege velidation test
student.isTrue(true) // boolean validation
student.isIn("der", ["asdas","asdwwd","der","gfhgf"]) // is In array validation
