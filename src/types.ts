// This is an alias for the `any` type.
type Id = string;
type BookNames = string;
type MaybeyPopularBooks = BookNames | null;

interface IUser {
    id: Id;
    name: string;
    surname: string;
}

//brings clarity to the code
const bookNames : BookNames[] = ["Harry Potter", "Lord of the rings"];

const harryPotter : MaybeyPopularBooks = "Harry Potter";

let username : string = 'John';

//one above java were in java you can only assign one value to a variable, in typescript you can assign multiple values to a variable. This is called union types.
let pageNumber : number | string = 10;

let errorMessage : string | null = null;

let user1 : IUser | null = null;