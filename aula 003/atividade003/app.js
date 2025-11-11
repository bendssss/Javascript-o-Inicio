function fnJogo(){
    let chute= 0, numeroMagico = Math.floor(Math.random() * 10) + 1
    chute = document.getElementById("valor").value

    if( chute == numeroMagico){
        document.getElementById("resultado").innerText = "acertou 😊"
    }else{
        document.getElementById("resultado").innerText ="Errou 🥲"
    }
}
//-1 como fazer um sorteio de numero 1 a 10 ap inves de deixar o numero 3 fixo