type ID = string;
type PopularTag = string;
type MaybePopularTag = string | null;

interface UserInterface {
    id: ID;
    name: string;
    surname: string;
}

const popularTags: PopularTag[] = ["tea", "coffee"]

const coffeeTag: MaybePopularTag = null

let username: string = "alex"

let pageName: string | number = "1"

let errorMessage: string | null = null

let user: UserInterface | null = null

// avoid this! 
let someProp: string | number | null | undefined | string[] | object