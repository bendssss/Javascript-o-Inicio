// Boas práticas
/*
Consistência de código
Melhores práticas
Escalabilidade
Fácil manutenção
Uniformidade entre projetos
*/

// Case sensitive
/*
A principal vantagem do case sensitive é aumentar o conjunto de símbolos (nomes) possíveis. O principal impacto nas linguagens tradicionais é a criação de uma relação implícita entre um tipo e uma instância desse tipo.
*/

// Sintaxe básica e comentário
/*
A sintaxe de uma linguagem de programação (como Java, Python, ou C++) é o conjunto de regras e normas que define como você deve escrever o código para que ele seja compreendido e processado pelo computador.
*/

// Declaração de variáveis(var, let, const)
/*
Tipo da Variável: Você começa definindo o tipo. Por exemplo, use int para números inteiros, double para números com casas decimais, ou String para texto. O tipo informa ao Java a natureza do dado e o quanto de memória ele deve reservar.

Nome da Variável: Em seguida, você dá um nome (identificador) à sua variável, seguindo a convenção camelCase (ex: nomeCompleto).

Atribuição e Valor: Opcionalmente, você pode atribuir um valor inicial usando o operador de atribuição (=).

Encerramento: Toda instrução de declaração deve ser encerrada com um ponto e vírgula (;).
*/
let nome = "Henderson"
console.log("ola" + nome)
console.log(nome)

const idade = 23
console.log(idade)
idade = 24

// Console e Debug
/*
O Console (ou Terminal) é a interface de texto fundamental que permite a um programa interagir com o usuário e exibir informações durante a execução.
Debugging (ou Depuração) é o processo de encontrar e corrigir erros (chamados de bugs) em um código-fonte.

Enquanto a maioria dos erros de sintaxe são detectados pelo compilador, o debugging é usado principalmente para encontrar erros de lógica (o código executa, mas faz a coisa errada).
*/
console.warn("atenção")
console.info("info")
console.error("erro")


console.log("Olá, Mundo!");
//Tipos de dados
/*
Com certeza! Aqui está a explicação dos tipos de dados do JavaScript em formato de texto corrido.

O JavaScript se diferencia do Java por ser uma linguagem dinamicamente tipada, o que significa que você não precisa declarar o tipo de dado de uma variável; o tipo é determinado automaticamente pelo valor que ela recebe. Os tipos de dados são divididos em Primitivos e Objetos.

Tipos de Dados Primitivos (Imutáveis)
Existem sete tipos de dados primitivos em JavaScript:

Number: Representa todos os tipos de números, sejam eles inteiros (como 10) ou de ponto flutuante/decimais (como 5.99). Não há separação entre int e double.

String: Usado para dados textuais, que devem ser envoltos em aspas simples ou duplas (ex: "Olá" ou 'Mundo').

Boolean: Representa valores lógicos, tendo apenas dois estados possíveis: true (verdadeiro) ou false (falso).

null: É um valor que o desenvolvedor atribui intencionalmente para indicar a ausência de um valor ou a desassociação de um objeto.

undefined: É o valor padrão que uma variável recebe quando é declarada, mas ainda não foi inicializada (ou seja, não recebeu um valor).

Symbol: Introduzido no ES6, é usado para criar identificadores únicos e imutáveis.

BigInt: Usado para representar números inteiros que excedem a capacidade máxima do tipo Number.
*/

console.log("typeof cidade ")
console.log("typeof salario")
console.log("typeof fumante")


// Operadores
// Operadores

// Operadores

//     Operador Atribuição
/*
atribuem valores a variáveis. O operador básico é o igual (=), mas existem atalhos como +=, -= para adicionar ou subtrair um valor e atribuir o resultado à variável.
 Por exemplo, x += 5 é equivalente a x = x + 5.
*/

//     Operadores aritméticos
//opradores aritiméticos ( + ; - ; * ; / ; %)
 console.log(n1=n2)// soma  
 console.log(n1-n2)// subtração
 console.log(n1*n2)//multiplicação
 console.log(n1/n2)//divisão
 /*
 console.log(10%3)
realizam cálculos matemáticos básicos. Incluem adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%), que retorna o resto da divisão.
 Por exemplo, 5 + 3 resulta em 8, e 10 % 3 resulta em 1.
*/

//     Operadores relacionais
/*
 comparam valores. === testa igualdade estrita (valor e tipo), enquanto !== testa se os valores são diferentes.
 Operadores como >, <, >=, <= comparam valores numéricos ou de string.
*/
console.log(n1==n2)
console.log(n1 != n2)
console.log(n1 >n2)
console.log(n1<n2)
console.log(n1<=n2)
console.log(n1=>n2)

//     Operadores lógicos ! - não/not || - ou / OR && - e / AND
let altura= 1.80
let peso= 80 
let tipo = "Criança"

//muda o resultado final,  se for verdadeiro vira falso e se for falso vra vgerdadeiro
console.log(!10>5)

console.log(altura > 1.5 && pesso < 150 && tipo !="criança")
//com && todas as verificaçoes devem ser verdadeiras para o resultando final ser verdadeiro

//com || apenas uma verificação precisa ser verdadeira 
console.log(altura > 1.5 || peso < 150 || tipo !="criança")

/*
combinam expressões booleanas. && (E) retorna verdadeiro apenas se ambas as expressões forem verdadeiras, || (OU) retorna verdadeiro se pelo menos uma for verdadeira, e ! (NÃO) inverte o valor lógico.
*/

// Estrutura
//     Estrutura de controle/decisão
let carro = "fiat"

 if (carro == "bmw"){
    console.log("você ta bem  mais ou menos")
 }else{
   console.log("A vida esta Progredindo") 
 }
let idadealuno = 20
if (idadealuno>= 18){
    consolelog("maior de idade")
}else{
    console.log("menor de idade")
}

//     Laços de repetição

let controle = 1
while(controle <=10){
console.log(controle)
controle = controle + 1
}



controle = 1 
while(controle >=10){ 
    console.log( 7*controle)
    controle = controle + 1
}


// Arrays --> vetor
let zoologico =[ 'leão','elefante','zebra','ariranha','lobo guará','arara']
console.log(zoologico[2])
 console.log(zoologico.length)

 let frutas [ '🍓','🍊','🍍','🍐','🍌','🍇','🍉']
console.log(frutas)
frutas.push('🍎')
console.log(frutas)

let alunos = []
alunos.push("joão")
alunos.push("renata")
alunos.push("roberto")
console.log(alunos)

// Funções personalizadas
function(){
    console.log("olá")
    console.log("seja Bem Vindo")
    console.log(" :) ")
}
mensagem()
mensagem()

function conta (horas, sal_hora){
    console.log(horas*sal_hora)
}
conta(140, 75)