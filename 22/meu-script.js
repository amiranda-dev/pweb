document.getElementById('mydiv').innerText = "Novo texto para div";

const minhaFuncao =  () => {
    alert("Teste JS");
}

const minhaFuncaoArgs = (arg1, arg2) => {
    alert(`Olá, ${arg1} ${arg2}, tudo bem?`);
};


const btn = document.getElementById("btn-alert");
btn.addEventListener("click", minhaFuncao);

const btn2 = document.getElementById("btn-args");
btn2.addEventListener("click", () => {
    const nome = prompt("Digite seu primeiro nome: ");
    const sobrenome = prompt('Digite seu sobrenome: ');
    minhaFuncaoArgs(nome, sobrenome);
});


function minhafuncao2(arg){
    var raiz = Math.sqrt(arg);
    var msg = 'A raiz quadrada é igual a: ';
    alert(msg + raiz)
}

function escreveDiv(texto){
    document.getElementById("minhaDiv").innerHTML = texto;
}

const text = document.getElementById("text");
text.addEventListener("click", () => {
    escreveDiv("<h1>Programação Web</h1>")
})

function escreveDiv3() {
    texto = prompt("Digite um texto qualquerr: ");
    document.getElementById("minhaDiv2").innerHTML = texto;
}

const text2 = document.getElementById("text2");
text2.addEventListener("click", () => {
    escreveDiv3();
})


const cont = () => {
    var numero = prompt("Digite um número: ")
    var n = "";
    for (let a = 1; a <= numero; a++) {
        if (a == numero) {
            n += a + ".";
        } else {
            n += a + ", ";
        }
    }
    document.getElementById("contagem").innerHTML = n;
    document.getElementById("limpar").style.display = "inline-block";
}

const limpar = () => {
    document.getElementById("contagem").innerHTML = "";
    document.getElementById("limpar").style.display = "none";
}

document.getElementById("contar").addEventListener("click", cont)
document.getElementById("limpar").addEventListener("click", limpar);