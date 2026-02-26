// const produto1 = {id: 2, produto: "Arroz" };
// const emJSON = JSON.stringify(produto1);

// console.log(typeof emJSON);
// console.log(typeof produto1);
// console.log(typeof emJSON);

// localStorage.setItem("produto1", emJSON);

// const emJSON = '{"id":2,"produto":"Arroz"}';
// const produto1 = JSON.parse(emJSON);

// console.log(typeof emJSON);
// console.log(typeof produto1);
// console.log(produto1.produto);

// const produto2 = JSON.parse(localStorage.getItem("produto1"));
// console.log(produto2);

/* const produtos = [
    {id:1, produto: "Arroz", preco: 125},
    {id:2, produto: "Macarrão", preco: 70},
    {id:3, produto: "Pão", preco: 50},
    {id:4, produto: "Pudim", preco: 100}
]; */

const armazenarLocal = (chave, valor) => {localStorage.setItem(chave, valor)};
// Armazenar produto por produto
for (const produto of produtos) {
    armazenarLocal(produto.id, JSON.stringify(produto));
}
// ou armazenar array completo
armazenarLocal("listarProdutos", JSON.stringify(produtos));

class Produto {
    cosntructor(obj) {
        this.nome = obj.produto.toUpperCase();
        this.preco = parseFloat(obj.preco);
    }
    somaICMS() {
        this.preco = thispreco * 1.21
    }
}

const armazenados = JSON.parse(localStorage.getItem("listarProdutos"));
const produtos = [];

for (const objeto of armazenados) 
    produtos.push(new Produto(objeto));

for (const produto of produtos)
    produto.somaICMS();
