/**
 * In java it would be:
 * public interface User {
 *  String name();
 *  int age();
 * }
 * 
 * ? means that the method is optional
 */
interface User {
    name: string;
    age?: number;
    
    getMessage(): string;
}

const user : User = {
    name: 'John',
    age: 30,
    getMessage() {
        return "Hello " + this.name;
    }
};

const user2 : User = {
    name: 'David',
    getMessage() {
        return "Hello " + this.name;
    }
};