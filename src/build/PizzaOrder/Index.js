"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
let cashInRegister = 100;
let nextOrderId = 1;
let orderQueue = [];
let nextPizzaId = 1;
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextOrderId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextOrderId++, name: "Veggie", price: 9 },
];
function addToArray(arr, item) {
    arr.push(item);
    return arr;
}
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "ordered" });
function addNewPizza(newPizza) {
    const pizza = Object.assign({ id: nextPizzaId++ }, newPizza);
    addToArray(menu, pizza);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name == pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exit in the menu.`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    addToArray(orderQueue, newOrder);
}
function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id == orderId);
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`);
        return;
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof identifier == "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    }
    else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    }
    else {
        throw new TypeError("Parameter `identifier` must be either a string or a number");
    }
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
placeOrder("Pepperoni");
completeOrder(1);
placeOrder("Anchovy");
placeOrder("Veggie");
completeOrder(2);
console.log("Menu :", menu);
console.log("Cash in register :", cashInRegister);
console.log("Order queue :", orderQueue);
