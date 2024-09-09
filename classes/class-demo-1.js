export default class Abc {
    #name;

    constructor(name) {
        this.#name = name;
    }

    show() {
        console.log(`Hello : ${this.#name}`);
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}
const firstName = "JS";
export const obj = {
    name: "no name"
}

function print() {
    console.log("print method");
}

export {firstName, print};
