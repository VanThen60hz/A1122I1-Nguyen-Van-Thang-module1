function dis(val)
{
    document.getElementById("result").value+=val
}
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
function clr1e()
{
    let z = Math.round(document.getElementById("result").value/10);
    document.getElementById("result").value = z;
    if(z == 0){
        document.getElementById("result").value = '';
    }
}