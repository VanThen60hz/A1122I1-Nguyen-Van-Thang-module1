function convert(){
    let a = parseInt(document.getElementById("amount").value);
    let fo =document.getElementById("fromcurrency").value;
    let to =document.getElementById("tocurrency").value;
    let result;
    if (fo == "USD" && to == "VietNam"){
            result = a*23545;
    }else if(fo == "VietNam" && to =="VietNam") {
            result = a;;
    }else if(fo == "USD" && to =="USD"){
        result = a;
    }else{
        result = a*0.000042;
    }
    document.getElementById("result").innerText = "Result: "+result;
}
