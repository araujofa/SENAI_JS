/*
Declare uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `genero` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome : "Fabio",
    sobrenome : "Araujo",
    genero : "Masculino",
    idade : 17,
    altura : 1.75,
    peso : 95,
    andando : false,
    caminhouQuantosMetros : 0
};


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function(umAno){
    pessoa.idade = pessoa.idade + umAno
};

console.log(`A pessoa tinha ${pessoa.idade} anos`);

console.log(pessoa.fazerAniversario(1));

console.log(`Agora a pessoa tem ${pessoa.idade} anos`)

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function(metrosAndados){

    pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + metrosAndados;

    if(pessoa.caminhouQuantosMetros > 0){
        pessoa.andando = true;
        return "A pessoa esta andando"
    }
}; 

console.log(`A pessoa tinha andado ${pessoa.caminhouQuantosMetros}m`);

console.log(pessoa.andar(10));

console.log(`Agora a pessoa andou ${pessoa.caminhouQuantosMetros}m`);

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function(andado){
    if(pessoa.andando){
        pessoa.andando = false;
        return "A pessoa não esta andando"
    }
};



/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

function nomeCompleto(){
    return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}!` 
};


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

function mostrarIdade(){
    return `Olá, eu tenho ${pessoa.idade} anos!`
};



/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

function mostrarPeso(){
    return `Eu peso ${pessoa.peso}Kg.`
};



/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

function mostrarAltura(){
    return `Minha altura é ${pessoa.altura}m.`
};



/*
Agora vamos trabalhar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(nomeCompleto()); // "Olá, meu nome é Fabio Araujo!"



/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(mostrarIdade()); // "Olá, eu tenho 17 anos!"



/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(mostrarPeso()); // "Eu peso 95Kg."



/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(mostrarAltura()); // "Minha altura é 1.75m."



/*
Faça a `pessoa` fazer 3 aniversários.
*/

console.log(pessoa.fazerAniversario(1));
console.log(pessoa.fazerAniversario(1));
console.log(pessoa.fazerAniversario(1));



/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log(pessoa.idade); // 21



/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com as distâncias diferentes passadas por parâmetro.
*/

console.log(pessoa.andar(2));
console.log(pessoa.andar(4));
console.log(pessoa.andar(6));



/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.andar()); // A pessoa esta andando


/*
Se a pessoa ainda está andando, faça-a parar.
*/

console.log(pessoa.parar()); // a pessoa não esta andando



/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

//



/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/


console.log(`${pessoa.caminhouQuantosMetros}m`);



/*
Agora, vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `genero` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

if(pessoa.genero === "Masculino" && pessoa.idade > 1 && pessoa.altura > 1 && pessoa.caminhouQuantosMetros > 1){
    return `Olá, eu sou o ${pessoa.nome} ${pessoa.sobrenome}, eu tenho ${pessoa.idade} anos, ${pessoa.altura}metros, peso ${pessoa.peso}Kg e, só hoje, caminhei ${pessoa.caminhouQuantosMetros}metros`
}else if(pessoa.genero === "Masculino" && pessoa.idade === 1 && pessoa.altura === 1 && pessoa.caminhouQuantosMetros === 1){
    var nomeMsing = `Olá, eu sou o ${pessoa.nome} ${pessoa.sobrenome}, eu tenho ${pessoa.idade} ano, ${pessoa.altura}metro, peso ${pessoa.peso}Kg e, só hoje, caminhei ${pessoa.caminhouQuantosMetros}metro`
}else if(pessoa.genero === "Feminino" && pessoa.idade === 1 && pessoa.altura === 1 && pessoa.caminhouQuantosMetros === 1){

}



/* Agora, apresente-se. */
