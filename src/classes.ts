interface IUser2 {
    getFullName(): string;
}

//methods can be public, private, or protected but not class which is a bit confusing 
class UserClass implements IUser2 {
    firstName: string;
    lastName: string;
    //can not change the value of unChangable as it is readonly.
    readonly unChangable: string;
    //can only be accessed by the class itself, like java static
    static readonly maxAge = 50;

    constructor(firstName : string, lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unChangable = firstName;
    }

    public getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

const user3 = new UserClass('John', 'Doe');
console.log(user3.getFullName());

class Admin extends UserClass {
    private IDE : string;

    public setEditor(IDE : string) : void {
        this.IDE = IDE;
    }

    public getEditor() : string {
        return this.IDE;
    }
}

const admin = new Admin('John', 'Doe');

console.log("admin IDE: " + admin.getEditor());
