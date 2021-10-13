let currentEquation = "";
document.getElementById("equation").innerHTML = "enter your equation";
const options = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6, 
    "7": 7, 
    "8": 8,
    "9": 9,
    "x": "*",
    "/": "/",
    "+": "+",
    "-": "-"
}

Object.keys(options).forEach(key => {
    let operation = options[key];
    document.getElementById(key).addEventListener("click", () => {
        console.log(operation);
        currentEquation = currentEquation + operation;
        document.getElementById("equation").innerHTML = currentEquation;
    })
})


document.getElementById("C").addEventListener("click", () => {
    currentEquation = "";
    document.getElementById("equation").innerHTML = "enter your equation";
})

document.getElementById("=").addEventListener("click", () => {
    document.getElementById("equation").innerHTML = eval(currentEquation);
    currentEquation = "";

})