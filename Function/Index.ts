type User = {
    username: string,
    role: UserRole,
}

type UserRole = "admin" | "member" | "guest";

const users: User[] = [
    {username: "John Doe", role: "member"},
    {username: "Jane Doe", role: "admin"},
    {username: "Marry Joe", role: "guest"}
]

function fetchUserDetails(username: string) : User
{
    const user = users.find(user=> user.username === username);
    if(!user)
    {
        throw new Error(`User with username ${username} not found.`);
    }

    return user;
}