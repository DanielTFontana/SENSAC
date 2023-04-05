class Cliente {

    constructor(){
   
        this.name = ''
        this.sobrenome = ''
        this.idade = ''
        this.email = ''
        this.cpf = ''
        this.cor = ''
        this.altura = ''
        this.cep = ''
        this.peso = ''
        this.telefone = ''
    }

    adicionar(){
    this.nome = document.getElementById('nome').value
    this.sobrenome = document.getElementById('sobrenome').value
    this.idade = document.getElementById('idade').value
    this.email = document.getElementById('email').value
    this.cpf = document.getElementById('cpf').value
    this.cor = document.getElementById('RaçaOuCor').value
    this.altura = document.getElementById('altura').value
    this.cep = document.getElementById('cep').value
    this.peso = document.getElementById('peso').value
    this.telefone = document.getElementById('telefone').value
        
    }
    funcao2(){
        this.adicionar()
    }
    

}

let cliente = new Cliente()



//função salvar e validar e função para salvar no local storage**