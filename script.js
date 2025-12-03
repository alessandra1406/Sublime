function alerta(){
    alert("Adicionado no carrinho!");
}


let star=document.querySelectorAll('.star');/* selecionamos  e seletamos todas as nossas estrelas dentro de uma variavel*/

 document.addEventListener('click',function(e){/* funcão que eu possa clilcar mas minhas estrelas*/
    /* dentro na minha variavel (e) aonde fica guradada as minhas informacões das minhas estrelas*/
let classStar = e.target.classList; /* captando as informacoes do nosso elemento classestar*/
if(!classStar.contains('ativo')){ /* verificar se quando eu estiver uma class ativo ele vai executar o codigo*/
    star.forEach(function(star){
        star.classList.remove('ativo'); /* remove todo o meu capo ativo deixando minha estrela vazia*/
});
classStar.add('ativo');
console.log(e.target.getAttribute('data-estrela'));/* aqui ele deixa marcado minhs informacoes de qual estrelinha foi marcada e anda para o banco de dados*/
}
});