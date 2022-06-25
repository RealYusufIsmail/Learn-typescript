var user = {
    name: 'John',
    age: 30,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user2 = {
    name: 'David',
    getMessage: function () {
        return "Hello " + this.name;
    }
};
