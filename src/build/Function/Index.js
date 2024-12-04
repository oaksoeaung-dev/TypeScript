"use strict";
const users = [
    { username: "John Doe", role: "member" },
    { username: "Jane Doe", role: "admin" },
    { username: "Marry Joe", role: "guest" }
];
function fetchUserDetails(username) {
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error(`User with username ${username} not found.`);
    }
    return user;
}
