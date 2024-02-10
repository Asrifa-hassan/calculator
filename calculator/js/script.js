function dis(val){
    document.getElementById("result") .value += val
return val
}
function solve() { 
    let x = document.getElementById("result").value 
    let y = eval(x);
    document.getElementById("result").value = y 
return y
} 
function clearscreen() { 
    document.getElementById("result").value =""
} 
function deletevalue() {
    let x = document.getElementById("result").value=""
    let z =x .toString();
    document.getElementById("result").value = z.slice(0,length-5);
}