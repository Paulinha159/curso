let biblioteca = []
let livros = { 
    nome:"",
    autor:"",
    tamanho:"",
    gênero:""
}
console.log ("nome do livro:")
process.stdin.on("data",function ( data) {
    let entrada = data.toString().trim(); 
  if ( entrada === "listar") {
    exibirbiblioteca();
    process.exit()
  }else if (!livros.nome) {
    livros.nome = entrada;
    console.log("nome do autor:");
  } else if (!livros.autor) {
    livros.autor = entrada;
    console.log("tamanho do livro:");
  }else if (!livros.tamanho){ 
    livros.tamanho= entrada
    console.log("gênero do livro:")
  } else if (!livros.gênero) {
    livros.gênero= entrada;
    biblioteca.push(livros);
    aluno = {
      nome: "",
      autor: "",
      tamanho: "",
      gênero:""
    };
    console.log("Livro cadastrado com sucesso!");
    console.log("Digite 'listar' para exibir a biblioteca de livros cadastrados ou digite o nome do livro:");
}
function exibirbiblioteca() {
  console.log("biblioteca de livros cadastrados:");
  biblioteca.forEach(function(livros) {
    console.log(`Nome: ${livros.nome}, autor: ${livros.autor}, tamanho: ${livros.tamanho}, gênero: ${livros.gênero}`);
  });
}
} ) ;