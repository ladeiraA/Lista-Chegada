class Fila {
    constructor() {
        this.id = 1;
        this.arrayNomes = [];
    }

    save() {
        let nome = this.lerDados();
        if(this.validaCampo(nome)){
            this.adicionar(nome);
        }
        this.listaTabela();
        this.cancel();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayNomes.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();

            td_id.innerText = this.arrayNomes[i].id;
            td_nome.innerText = this.arrayNomes[i].nomesalvar;

            td_id.classList.add('center')
            td_nome.classList.add('center')
        }
    }

    adicionar(nome) {
        this.arrayNomes.push(nome);
        this.id++;
    }

    lerDados() {
        let nome = {}
        nome.id = this.id;
        nome.nomesalvar = document.getElementById('nome').value;
        return nome;
    }

    validaCampo(nome) {
        let msg = '';
        if(nome.nomesalvar == ''){
            msg += '- Informe o nome'
        }

        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }

    cancel() {
        document.getElementById('nome').value = ''; 
    }

    excluir() {

        let tbody = document.getElementById('tbody')
        this.arrayNomes.shift();
        tbody.deleteRow(this.id - this.id);
        console.log(this.id);
    }
}

var fila = new Fila()