var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.validateRange = function (val, from, to) {
        return ((val <= to) && (val >= from));
    };
    Student.prototype.getMessage = function () {
        return "Test \n" +
            "Range: " +
            this.validateRange(5, 1, 23);
    };
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//console.log(greeter(new Student("Eyal", "John", "Hen")));
console.log((new Student("Eyal", "John", "Hen")).getMessage());
