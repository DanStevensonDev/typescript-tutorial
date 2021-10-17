interface UserInterface {
    getFullName(): string
}

class User implements UserInterface {
    firstName: string
    lastName: string
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

class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const user = new User("Dan", "Stevenson")
console.log(user.getFullName())

const admin = new Admin("Foo", "Bar")
console.log(admin.setEditor("New editor"))