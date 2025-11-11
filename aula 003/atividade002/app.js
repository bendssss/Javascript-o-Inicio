function fnConverterValor(){
    let valorDigitado = 0, total = 0
    valorDigitado = document.getElementById("valor").value
    total = valorDigitado * 5.29
    document.getElementById("valorConvertido").innerText = total
}

//1-como colocar o Resultado no formato R$ XX,XX
//2-como mostrar o resultado da conversão de dolar e euro