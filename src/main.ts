const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

interface UserInterface<T> {
    name: string
    data: T
}

const user: UserInterface<{ meta: string }> = {
    name: "Jack",
    data: {
        meta: "foo"
    }
}

const user2: UserInterface<string[]> = {
    name: "John",
    data: ["foo", "bar"]
}

const result = addId(user)
console.log("result", result)

const result2 = addId(user2)
console.log("result2", result2)