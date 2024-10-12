function convert(){
    let tempNum = +document.getElementById("temp-num").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let msg = document.getElementById("convert-msg");

    if(tempNum == ''){
        alert("Please eneer a Value to convert 😃")
    }else if(from === 'fahrenhit' && to === 'celsius'){
        let calc = (tempNum - 32) * (5 / 9);
        msg.innerText = `Converted Tempertaure : ${calc.toFixed(2)} Celsius`;
    } else{
        let calc2 = tempNum * (9 / 5) + 32;
        msg.innerText = `Converted Tempertaure :   ${calc2.toFixed(2)} Fahrenheit`;
    }
}

function reset() {
    let fahrenheit = document.getElementById("fah");
    let celsius = document.getElementById("cel");
    document.getElementById("from").value = fahrenheit.value;
    document.getElementById("to").value = celsius.value;
    document.getElementById("temp-num").value = "";
    document.getElementById("convert-msg").innerText = "";
  }