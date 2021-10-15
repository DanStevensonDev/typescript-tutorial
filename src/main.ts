class User {
    private firstName: string
    private lastName: string
    readonly unchangeableName: string
    static readonly maxAge = 50

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.unchangeableName = firstName
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName
    }
}

const user = new User("Dan", "Stevenson")
console.log(user.getFullName())

// accessible only on the class
console.log(User.maxAge)

// not on the instance
// console.log(user.maxAge)