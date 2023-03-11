/* let nomeAluno = "Arthur";
console.log(nomeAluno);

const nomeAmor = "Izabelly";
console.log(nomeAmor); */

let listaEstudantes = ["Arthur", "Izabelly", "Estevão Ferreira"];
listaEstudantes.push("Ednaldo Pereira");
console.log(listaEstudantes);
quantidadeEstudantes = listaEstudantes.length;

for (let indice = 0; indice < quantidadeEstudantes; indice++){
    alunos = listaEstudantes[indice];
   console.log(alunos);
}

if (quantidadeEstudantes < 5){
    listaEstudantes.push("João");
    console.log(listaEstudantes);
} else {
    console.log("Não é possível adicionar novos alunos nesta turma!")
}

// tamanho do array não é o mesmo que índice!
// índice começa a partir do 0, tamanho é contado normalmente de 1 até o limite.
// o tamanho do array é a quantidade de elementos e o indice é onde cada elemento está posicionado.



// também podemos fazer estruturas de repetição através do laço "do"
/* exemplo: 

var personagens = ["Mario", "Kirby", "Bowser"];

var quantidadePersonagens = personagens.length;
let inicio = 0;

do {
    console.log(personagens[inicio]);
    inicio++
} while (inicio < quantidadePersonagens);

*/
// estrutura de repetição que utiliza o incremento de números 


for (var i = 1; i <= 10; i++ ){
    console.log(i);
}



