var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myStr = 'some string value';
var myNum = 456;
var array = ['whatever', 1, 2, 3, 4, 5, 'cat', 'dog'];
array.push('srtsdfgsdfg');
array.push(4563456);
array.push(true);
var first = array[0];
var User = /** @class */ (function () {
    function User(name, age) {
        if (age === void 0) { age = 99; }
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log("hello " + this.name + ", I am " + this.age + " years old");
    };
    return User;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age, eyeColor) {
        var _this = _super.call(this, name, age) || this;
        _this.eyeColor = eyeColor;
        return _this;
    }
    return Person;
}(User));
var user = new User('Bob');
user.sayHello();
var person1 = {
    name: 'Jason',
    age: 99
};
person1.name = 'Bob';
var person = new Person('Sam', 23, 'red');
var stringArray = ['1', '3', '5', 'cat'];
function map(array, callback) {
    var results = [];
    for (var index = 0; index < array.length; index++) {
        results.push(callback(array[index], index));
    }
    return results;
}
var things = map(stringArray, function (element) { return parseInt(element, 10); });
var more = map(things, function (element) { return element * element; });
