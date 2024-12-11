interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assignment: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assignment, ...propsToUpdate};
}

const assignment1: Assignment = {
    studentId: "STD-1000",
    title: "Final project",
    grade: 0,
}

console.log(updateAssignment(assignment1, {grade: 9}));

type Phone = {
    brand: string,
    ram: string,
    storage: string,
}

// type UpdatePhone = {
//     brand?: string,
//     ram?: string,
//     storage?: string,
// }

type UpdatePhone = Partial<Phone>;

type car = string;

type Students = "Mg Mg" | "Su Su";
type LetterGrades = "A" | "B" | "C" | "D";

const finalGrades: Record<Students, LetterGrades> = {
    "Mg Mg": "A",
    "Su Su": "B",
    // "Mg Mg": "C", //error
    // "Lu Lu" : "A" //error
}

type Grades = {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    "Mg Mg": {assign1: 98, assign2: 100},
    "Su Su": {assign1: 59, assign2: 40}
}

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
    studentId: "STD-3000",
    grade: 100,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
    studentId: "STD-4000",
    title: "Final project",
}

type adjustGrade = Exclude<LetterGrades, "A">;

type highGrade = Extract<LetterGrades, "A">;

type AllPossibleGrade = "Oak" | "Soe" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrade>;

const createNewAssign = (title:string, points: number) => {
    return {title, points};
}

type newAssign = ReturnType<typeof createNewAssign>; // function ရဲ့ return type ကို type အနေနဲ့ယူတာ

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Hello", 400];

const assignArgs2: newAssign = createNewAssign(...assignArgs);

// Promise

interface UserFetch {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async(): Promise<UserFetch[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users") //fetch က promise return ပြန်လို့ await နဲ့စောင့်
                        .then(resopse => resopse.json()).catch(error => {
                            if(error instanceof Error)
                                console.log(error.message);
                        })
    return data;
}

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUsers>> //fetchUsers က promise return ပြန်လို့စောင့်ပေးရတယ် Awaited နဲ့

fetchUsers().then(users => console.log(users));