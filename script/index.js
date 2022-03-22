function validacaoForm() 
{
    let nome = document.querySelector("#nome-completo");
    let email = document.querySelector("#email");                   /* deixa o elemento manipulavel atribuindo na variavel */
    let mensagem = document.querySelector('#mensagem');
    let deuCerto = true;
    
    nome = nome.value;
    email = email.value;                /* pega o que esta escrito no campo */
    mensagem = mensagem.value;
    

    // validação da mensagem

    if(mensagem.length == 0)
    {
       alert("Insira uma mensagem!");
       deuCerto = false;
    }

    // validação do e-mail

    function validacaoEmail(email) 
    {
        let emailUsuario = email;
        let resultado = emailUsuario.split('@');    /* split separa a string com um caracter definido e coloca em um array (sem incluir o separador) */

        if ((resultado[0].length > 32) || (resultado[1].length > 16 + 4)) // 4 = .com 
        {
            alert ("Endereço de e-mail inválido.");
            deuCerto = false;
        }
    }

    validacaoEmail(email);

    if (deuCerto) {
        primeiroNome = nome.split(" ")
        alert(`Obrigado pelo contato, ${primeiroNome[0]}!`)
    }
}
