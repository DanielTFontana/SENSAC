function cadastrar(){

let data = document.getElementById('data').value
let sobrenome = document.getElementById('sobrenome').value
let nome = document.getElementById('nome').value
let resposta = document.getElementById('resposta')

    const obj = {
        "nome": nome,
        "sobrenome":sobrenome,
        "data": data,
    }

 const criaLinha = document.createElement('ul')
 const criarbotao = document.createElement('input')

 criarbotao.setAttribute('type','button')
 criarbotao.setAttribute('value','remover')
 criarbotao.addEventListener('click', rmv)
 function rmv(){
    resposta.removeChild(criaLinha)
 }
 criaLinha.innerHTML = `Seu nome: ${obj.nome} --
 Seu sobrenome: ${obj.sobrenome} --
 Sua data de nascimento: ${obj.data}`
resposta.appendChild(criaLinha)
criaLinha.appendChild(criarbotao)
    console.log(obj);


    let eVazio = !Object.values(obj).every(x => x !== null && x !== '')
    //objects.value vai verificar o valor de cada propriedade no objeto, no caso(obj)
    //.every vai pegar todos os valores do obj, um por um.
    //vai verificar se x, nas propriedades do obj é nulo ou vazio.
    if(eVazio){
        alert('Campo vazio')
        return;
    }
    else{
        let objSalvo = JSON.stringify(obj)

        localStorage.setItem("obj", objSalvo)
        //modo de teste para salvar localmente os dados
        console.log(objSalvo)
    }
    console.log(eVazio)
   
}
function getDados(){
    let dados = localStorage.getItem("obj")

    const myObj = JSON.parse(dados)//sever para transformar o JSON em objeto, ao contrário do stringfy

    console.log(myObj)
}