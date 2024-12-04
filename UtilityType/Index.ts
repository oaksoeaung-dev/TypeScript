type Phone = {
    id: number,
    brand: string,
    storage: "512GB" | "256GB" | "128GB"
}

const phones: Phone[] = [
    {id: 1, brand: "IPhone 16", storage: "512GB"},
    {id: 2, brand: "Xiaomi Civi 4", storage: "512GB"},
    {id: 3, brand: "Samsung S24", storage: "128GB"},
];

let nextPhoneId = 1;

type UpdatePhone = Partial<Phone>; // Partial automatically add optional property id?, brand?

function updatePhone(id: number, update:UpdatePhone)
{
    const phone = phones.find(phone => phone.id === id);

    if(!phone)
    {
        console.error("Phone not found");
        return;
    }

    Object.assign(phone, update);

}

function addNewPhone(newPhone: Omit<Phone, "id" | "phone">): Phone // Omit က သတ်မှတ်ထားတာတွေကိုပေးမထည့်ဘူး id သတ်မှတ်ထားရင်  id ထည့်စရာမလိုဘူး
{
    const phone: Phone = {
        id: nextPhoneId++,
        ...newPhone
    }

    phones.push(phone);
    return phone;
}

updatePhone(1, {brand: "IPhone 16 Pro"});
updatePhone(2,{brand: "Xiaomi Redmi Note 14 Pro", storage: "256GB"});

//addNewPhone({id: 3, brand: "Huawei P70", storage: "256GB"}); // Error because of Omit
addNewPhone({brand: "Huawei P70", storage: "256GB"});

console.log(phones);