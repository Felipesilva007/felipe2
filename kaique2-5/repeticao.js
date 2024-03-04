let tentativas = 0
<<<<<<< HEAD
let tabuada = ""
=======
let tabuada=""
>>>>>>> ad4d45249a70166cb656607da72c0770b3f42072
for (let i = 0; i <= 10; i++) {
    tabuada += "<p>2x" + i + "=" + (2 * i) + "<p>"
}
document.getElementById("tabuada").innerHTML = tabuada

function adivinhacao() {
    let sugestaoNumero = parseInt(document.getElementById("numero").value)
    let numero = 5
    let aviso = document.getElementById("aviso")
<<<<<<< HEAD

    while (sugestaoNumero !== numero) {
        aviso.innerHTML = "tentativa " + (tentativas++) + "<p>numero errado! tente novamente.<p>"

        if (numero > sugestaoNumero) {
            sugestao.innerHTML = "O numero é maior do que sugeriu"
        }
        else {
            sugestao.innerHTML = "O numero é menor do que sugeriu"
=======
    let sugestao = document.getElementById("sugestao")

    while (sugestaoNumero !== numero) {
        aviso.innerHTML = "tentativa" + (tentativas++) + 
        "<p> numero errado! tente novamente.</p>"

        if(numero>sugestaoNumero){
            sugestao.innerHTML = "o numero é maior que sugeriu"

        }
        else{
            sugestao.innerHTML = "o numero é menor que sugeriu"
>>>>>>> ad4d45249a70166cb656607da72c0770b3f42072
        }
        sugestaoNumero.value = ""
        return
    }
    sugestao.innerHTML = ""
<<<<<<< HEAD
    aviso.innerHTML = "parabéns!! você acertou em" + tentativas + "tentativas!!"
}

function contDecrescente(){
    let numDigitado = parseInt(document.getElementById("numDigitado").value)
    let contagem = document.getElementById("contagem")

    contagem.innerHTML+="<h1>for</h1>"

    for(x=numDigitado;x>0;x--){
        contagem.innerHTML += "<p>"+x+"<p>";
    }

    contagem.innerHTML+="<h1>while</h1>"

    while(numDigitado>0){
        contagem.innerHTML += "<p>"+(numDigitado--)+"<p>";
    }
}

=======
    aviso.innerHTML = "parabéns!! você acertou!!!"}
>>>>>>> ad4d45249a70166cb656607da72c0770b3f42072
