// 1. Crie uma função que recebe um array de números e retorna apenas os pares
const filtrarPares = (numeros) => {
    return numeros.filter(n => n % 2 === 0);
};

console.log("Exercício 1:", filtrarPares([1, 2, 3, 4, 5, 6] )); // [2, 4, 6]

// 2. Crie uma função que recebe um array de nomes e retorna em MAIÚSCULAS
const nomesEmMaiuscula = (nomes) => {
  return nomes.map(n => n.toUpperCase());
};

console.log("Exercício 2:", nomesEmMaiuscula(['joão', 'maria', 'pedro'])); // ['JOÃO', 'MARIA', 'PEDRO']

// 3. Crie uma função que calcula a média de um array de notas
const calcularMedia = (notas) => {
  const soma = notas.reduce((acumulador, n) => acumulador + n, 0);
  return soma / notas.length;
};

console.log("Exercício 3:", calcularMedia([7, 8, 9, 6])); // 7.5

// 4. Crie uma função que recebe um array de produtos (objetos) e retorna apenas os que custam menos de 50 reais
const produtosBaratos = (produtos) => {
    return produtos.filter(produto => produto['preco'] < 50);
};

const produtos = [
  { nome: 'Teclado', preco: 120 },
  { nome: 'Mouse', preco: 45 },
  { nome: 'Monitor', preco: 800 },
  { nome: 'Mousepad', preco: 25 }
];

console.log("Exercício 4:", produtosBaratos(produtos)); // [{ nome: 'Mouse', preco: 45 }, { nome: 'Mousepad', preco: 25 }]

// 5. DESAFIO: Crie uma função que simula um carrinho de compras deve receber um array de produtos e retornar o total
const calcularTotal = (carrinho) => {
    return carrinho.reduce((soma, n) => soma + n['preco'], 0);
};

console.log("Exercício 5:", calcularTotal(produtos)); // 990