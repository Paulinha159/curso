const biblioteca = [];
let livro = {};
let opcao = 0 ;

    console.log("Bem vindos escolha uma das opções abaixo:")
    console.log("1: digite as informações do livro:")
    console.log("2: caso queira remover um livro ")
    console.log("3: Para ver os livros que inseriu.")

    process.stdin.on ("data", function (data){
        let entrada_usuario = data.toString().trim();
    if(!opcao){
        opcao = entrada_usuario;

    }else {
        switch(opcao){
            case 1 : 
            
            
            if (!livro.nome){
                livro.nome= entrada_usuario
                console.log("nome do livro:")
               
            }else if (!livro.tamanho){
                livro.tamanho= entrada_usuario
                console.log ("tamanho do livro")
               

            }else if (!livro.autor){
                livro.autor= entrada_usuario
                console.log ( "autor do livro:")
              
            } 
            else if (!livro.genero){
                livro.genero= entrada_usuario
                console.log ("gênero do livro:")
                biblioteca.push(livros);
                console.log(biblioteca);
                livro = {};
                opcao=0;

            }
            case 2:
                break;
            case 3:
                biblioteca.forEach((livros) =>{
                    console.log(livros)

                });

            
        
             
                

        }
    }
})