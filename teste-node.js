let rng = 0;
let pontos = 1;
let aposta = 1;
let verificaValidade = false;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function resultado(){
rng =  Math.random();
rng = Math.round(rng);
}
    
function apertar(){
    resultado();
    if (rng == 0){
        pontos+= aposta;
        console.log("Ganhou!!");
        console.log(`Pontos: ${pontos}`);
    } else {
        pontos-= aposta;
        console.log("Perdeu!!");
    }   
    registraAposta();    
}    

function registraAposta() {
    if (pontos == 0){
    console.log("GAME OVER")
    rl.close();
    } else {     
    rl.question(`Você tem ${pontos} pontos. Digite uma Aposta (ou "s" para confirmar): `, (valor) => {
    valor = valor.trim();
    valorInt = parseInt(valor);
        
    if (valor.toLowerCase() === 's' && verificaValidade === true) {
        apertar();
        verificaValidade = false;
    }else if(isNaN(valorInt)) {
        console.log("Aposta invalida ou não definida, digite sua aposta novamente!");
        registraAposta();
    } else {
        aposta = parseInt(valor);
        console.log(`Você digitou: ${aposta}`);    
    if (aposta > pontos || aposta < 0) {
        console.log("Você não pode apostar um valor maior que seus pontos ou um valor negativo, digite sua aposta novamente");
    }else{
        console.log(`Se perder, ficará com ${pontos-aposta} pontos. Se ganhar, ficará com ${pontos+aposta} pontos.`);
        console.log("Tem certeza que quer apostar esses pontos?(S/N)");
        verificaValidade = true;
    }
    registraAposta();
         }   
     });
    }
}

registraAposta();
