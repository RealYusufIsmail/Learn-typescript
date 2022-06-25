//like in java void is a type that represents the absence of value.
const doSomething =  () : void => {
    console.log("Hello World");
};

//any is a type that represents all types like Object in java.
let foo1 : any = "Hello World";


//never is a type that represents the absence of value.
const throwError = () : never => {
    throw new Error("Error");
}

//unknown is a type that represents the absence of value.
let foo2 : unknown = "Hello World";

//can not assign a value to unknown type.
//foo2 = 10;
//but can you can do this
let s2: string = foo2 as string;

let pageNumber1 : string = "10";
//type casting is used to convert the type of variable.
let pageNumber2 : number = (pageNumber1 as unknown) as number; 