const  Redis  =  require ( "ioredis" ) ;
const  redis  =  new  Redis ( ) ;


class Banco {
    constructor() {
        this.id = 1;
    }

    add(nome) {
        redis.rpush("Nomes" , nome);
        console.log("Adicionado");

        redis.lrange("Nomes", 0, -1).then((exibir) => {
           console.log(exibir);  
            adicionar(exibir);
        });
        
        
    };
      
    excluir() {
          redis.lpop("Nomes").then((excluir) => {
              console.log(excluir);
            });
            console.log("Excluir");    

        }  
      
    tamanho() {
          redis.llen("Nomes").then((tamanho) => {
              console.log('Tamanho: ' +tamanho);
            });       
        }

    limpar() {
        redis.del("Nomes");
    }
    

}

// var banco = new Banco();

// banco.limpar();
// banco.add("Cesar");
// banco.add("Cesar2");
// banco.add("Cesar3");
// banco.excluir();
// banco.add("Cesar4");

// tamanho();
// excluir();

redis.lrange("Nomes", 0, -1).then((Consulta) => {
    console.log(Consulta);
});