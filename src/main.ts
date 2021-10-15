interface UserInterface {
    getFullName(): string
}

class User implements UserInterface {
    private firstName: string
    private lastName: string
    readonly unchangeableName: string
    static readonly maxAge = 50

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.unchangeableName = firstName
    }

    // "implements" makes this function required, since it is in the interface
    getFullName(): string {
        return this.firstName + " " + this.lastName
    }
}

const user = new User("Dan", "Stevenson")
console.log(user.getFullName())