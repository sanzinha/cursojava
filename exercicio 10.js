// Definindo as variáveis com os dados do livro
const titulo = "O Pequeno Príncipe";
const autor = "Antoine de Saint-Exupéry";
const paginas = 96;
const disponivel = true;

// Criando um objeto para armazenar as informações do livro
const livro = {
    titulo,
    autor,
    paginas,
    disponivel
};

// Exibindo as informações do livro
console.log("Título:", titulo);
console.log("Autor:", autor);
console.log("Número de páginas:", paginas);
console.log("Disponível:", disponivel);
console.log("Informações completas do livro:", livro);

// Verificando a disponibilidade do livro
if (livro.disponivel) {
    console.log(`O livro '${livro.titulo}' está disponível para empréstimo.`);
} else {
    console.log(`O livro '${livro.titulo}' não está disponível no momento.`);
}