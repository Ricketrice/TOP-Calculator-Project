function addition(a,b) {
    return a+b;
};

function subtraction(a,b) {
    return a-b
};

function multiplication(a,b) {
    return a*b;
};

function division(a,b) {
    return a/b;
};

function getID(a) {
    let temp = a.target.id;
    console.log(temp);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", getID);
});
console.log("Hello World");
