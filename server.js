var Validator = /** @class */ (function () {
    function Validator(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Validator.prototype.inRange = function (val, from, to) {
        var g = ((val <= to) && (val >= from));
        console.log("inRange: " + g);
        return g;
    };
    Validator.prototype.isTrue = function (i) {
        var g = false;
        console.log("isTrue: " + (g == i));
        return g == i;
    };
    Validator.prototype.isIn = function (s, sa) {
        for (var _i = 0, sa_1 = sa; _i < sa_1.length; _i++) {
            var i = sa_1[_i];
            if (i == s) {
                console.log("isIn: " + true);
                return true;
            }
        }
        console.log("isIn: " + false);
        return false;
    };
    return Validator;
}());
function test() {
    console.log("function: " + "test function");
}
var student = new Validator("Eyal", "Hen");
test(); // function test
student.inRange(5, 1, 23); // ranege velidation test
student.isTrue(true); // boolean validation
student.isIn("der", ["asdas", "asdwwd", "der", "gfhgf"]);
