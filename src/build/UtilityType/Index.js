"use strict";
const phones = [
    { id: 1, brand: "IPhone 16", storage: "512GB" },
    { id: 2, brand: "Xiaomi Civi 4", storage: "512GB" },
    { id: 3, brand: "Samsung S24", storage: "128GB" },
];
function updatePhone(id, update) {
    const phone = phones.find(phone => phone.id === id);
    if (!phone) {
        console.error("Phone not found");
        return;
    }
    Object.assign(phone, update);
}
updatePhone(1, { brand: "IPhone 16 Pro" });
updatePhone(2, { brand: "Xiaomi Redmi Note 14 Pro", storage: "256GB" });
console.log(phones);
