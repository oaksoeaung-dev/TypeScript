type Address = {
    street: string,
    city: string,
    country: string,
}

type Person = {
    name:string,
    age: number,
    isStudent: boolean,
    address?: Address // Optional property
}

let person3: Person = {
    name: "Joe",
    age: 43,
    isStudent: false,
    address: {
        street: "Hlaing Sabal",
        city: "Yangon",
        country: "Myanmar",
    }
}

let person4: Person = {
    name: "John",
    age: 43,
    isStudent: false,
}