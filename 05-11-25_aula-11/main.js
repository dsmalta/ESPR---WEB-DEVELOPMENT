console.log("oi gente");

function fazAlgo(coisa) {
    console.log("Estou executando fazAlgo...", coisa)
    /* return "resposta" */
}

let bomDia = function(nome) {
    console.log("Bom dia,", nome);
}

let boaTarde = (nome) => {
    console.log("Boa tarde,", nome);
}

let boaNoite = (nome) => {
    console.log("Good evening,", nome);
}

function oi(nome, acao) {
    console.log("oi,", nome)
    acao(nome)
}

fazAlgo(12)
// bomDia("Ana")
// boaTarde("Bia")
oi("Ana", bomDia)
oi("Bia", (nome) => {
    console.log("Good Morning,", nome)
});

oi("Banana", (nome) => {
    console.log("Good Evening,", nome);
})