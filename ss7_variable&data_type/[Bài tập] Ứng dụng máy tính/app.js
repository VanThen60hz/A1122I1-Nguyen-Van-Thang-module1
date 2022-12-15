

function plus(){
    let a = parseInt(document.getElementById("first-text").value);
    let b = parseInt(document.getElementById("second-text").value);
    let result = a + b;
    document.getElementById("result").innerText = "Result: "+result;
}

function minus(){
    let a = parseInt(document.getElementById("first-text").value);
    let b = parseInt(document.getElementById("second-text").value);
    let result = a - b;
    document.getElementById("result").innerText = "Result: "+result;
}
function multy(){
    let a = parseInt(document.getElementById("first-text").value);
    let b = parseInt(document.getElementById("second-text").value);
    let result = a * b;
    document.getElementById("result").innerText = "Result: "+result;
}
function divide(){
    let a = parseInt(document.getElementById("first-text").value);
    let b = parseInt(document.getElementById("second-text").value);
    let result = a / b;
    document.getElementById("result").innerText = "Result: "+result;
}