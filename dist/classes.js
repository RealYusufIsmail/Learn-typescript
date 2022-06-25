var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//methods can be public, private, or protected but not class which is a bit confusing 
var UserClass = /** @class */ (function () {
    function UserClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unChangable = firstName;
    }
    UserClass.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    //can only be accessed by the class itself, like java static
    UserClass.maxAge = 50;
    return UserClass;
}());
var user3 = new UserClass('John', 'Doe');
console.log(user3.getFullName());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (IDE) {
        this.IDE = IDE;
    };
    Admin.prototype.getEditor = function () {
        return this.IDE;
    };
    return Admin;
}(UserClass));
var admin = new Admin('John', 'Doe');
console.log("admin IDE: " + admin.getEditor());
