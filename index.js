//to find hypot of a right angle triangle

let a;
let b;
let c;

document.getElementById("submit").onclick = function() {
    a = document.getElementById("leg-one").value;
    a = Number(a);
    b = document.getElementById("leg-two").value;
    b = Number(b);
    console.log("legA",a, "legB", b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("result").innerHTML = c;
}