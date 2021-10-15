// postfixed with "Interface" to distinguish from classes
interface UserInterface {
    name: string;
    age?: number;
}

const user1: UserInterface = {
    name: "Joe Bloggs",
    age: 99,
}

const user2: UserInterface = {
    name: "Dan Stevenson",
}