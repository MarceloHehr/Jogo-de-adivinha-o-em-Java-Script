alert('Bem vindo ao jogo do número secreto!');
let numeroMax = 1000;
let numeroSecreto = parseInt(Math.random()*numeroMax)+1;
let chute;
let tentativas = 1;
while(chute!=numeroSecreto)
{
    chute = prompt(`Escolhe um número até  ${numeroMax}`);
    
    if (chute==numeroSecreto)
    {
        break
        

    }  else
        {
            
            if(numeroSecreto>chute)
            {   
                alert(`o número secreto é maior que ${chute}`);
                console.log(numeroSecreto);
            }
            else
            {
                alert(`O número secreto e menor que ${chute}`);
                console.log(numeroSecreto);
            }
            tentativas++;
            
        }
        
} 


let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns você acertou o numero secreto ${numeroSecreto} apos ${tentativas} ${palavraTentativas}`);


