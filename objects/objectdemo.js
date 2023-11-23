export const obj ={
    "A":"Apple",
    "M":"Banana",
    "O":"Cherry"
}

const str = "Apple";

const result = obj[str] || "unkown fruite";

console.log(" results "+ result);

