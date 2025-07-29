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
