class User {
    private firstName: string
    private lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName
    }
}

const user = new User("Dan", "Stevenson")
console.log(user.getFullName())