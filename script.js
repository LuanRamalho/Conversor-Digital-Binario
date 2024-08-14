//Initial References
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Converte de Decimal para Binario
decInp.addEventListener("input", () => {
  let decValue = parseInt(decInp.value);
  //Converts the decimal value to binary
  binInp.value = decValue.toString(2);
});

//Converte de Binario para Decimal
binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  //Se o numero binario convertido e valido
  if (binValidator(binValue)) {
    decInp.value = parseInt(binValue, 2);
    errorMsg.textContent = "";
  }
  //Else display an error message
  else {
    errorMsg.textContent = "Por Favor, entre com um número binário válido";
  }

  //Funcao para validar o numero binario 0 e 1
  function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1") {
        return false;
      }
    }
    return true;
  }
});
