"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assignment, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
};
const assignment1 = {
    studentId: "STD-1000",
    title: "Final project",
    grade: 0,
};
console.log(updateAssignment(assignment1, { grade: 9 }));
const finalGrades = {
    "Mg Mg": "A",
    "Su Su": "B",
    // "Mg Mg": "C", //error
    // "Lu Lu" : "A" //error
};
const gradeData = {
    "Mg Mg": { assign1: 98, assign2: 100 },
    "Su Su": { assign1: 59, assign2: 40 }
};
const score = {
    studentId: "STD-3000",
    grade: 100,
};
const preview = {
    studentId: "STD-4000",
    title: "Final project",
};
const createNewAssign = (title, points) => {
    return { title, points };
};
const assignArgs = ["Hello", 400];
const assignArgs2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users") //fetch က promise return ပြန်လို့ await နဲ့စောင့်
        .then(resopse => resopse.json()).catch(error => {
        if (error instanceof Error)
            console.log(error.message);
    });
    return data;
});
