var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Student.prototype.validateRange = function (val, from, to) {
        console.log(((val <= to) && (val >= from)));
    };
    return Student;
}());
function test() {
    console.log("test function");
}
var student = new Student("Eyal", "Hen");
student.validateRange(5, 1, 23);
test();
