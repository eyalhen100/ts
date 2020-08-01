var Validator = /** @class */ (function () {
    function Validator(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Validator.prototype.inRange = function (val, from, to) {
        console.log("inRange: " + ((val <= to) && (val >= from)));
    };
    return Validator;
}());
function test() {
    console.log("function: " + "test function");
}
var student = new Validator("Eyal", "Hen");
// ranege velidation test
student.inRange(5, 1, 23);
// function test
test();
