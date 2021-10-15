class User {
    private firstName: string
    private lastName: string
    readonly unchangeableName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.unchangeableName = firstName
    }

    // This errors because readonly is set above - cannot assign
    // changeUnchangeableName(): void {
    //     this.unchangeableName = "foo"
    // }

    getFullName(): string {
        return this.firstName + " " + this.lastName
    }
}

const user = new User("Dan", "Stevenson")
console.log(user.getFullName())