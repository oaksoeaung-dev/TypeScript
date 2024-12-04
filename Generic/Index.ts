type ApiResponse<TData,TError> = {
    data: TData,
    isError: TError
}

type UserResponse = {
    name: string,
    age: number,
}

type BlogResponse = {
    title: string,
    author: string,
}

const response1: ApiResponse<UserResponse,Boolean> = {
    data: {
        name: "Oak",
        age: 24,
    },
    isError: true
}

const response2: ApiResponse<BlogResponse,Boolean> = {
    data: {
        title: "Typescript",
        author: "John Doe",
    },
    isError: false
}

