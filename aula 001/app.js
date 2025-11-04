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
/*
realizam cálculos matemáticos básicos. Incluem adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%), que retorna o resto da divisão.
 Por exemplo, 5 + 3 resulta em 8, e 10 % 3 resulta em 1.
*/

//     Operadores relacionais
/*
 comparam valores. === testa igualdade estrita (valor e tipo), enquanto !== testa se os valores são diferentes.
 Operadores como >, <, >=, <= comparam valores numéricos ou de string.
*/

//     Operadores lógicos
/*
combinam expressões booleanas. && (E) retorna verdadeiro apenas se ambas as expressões forem verdadeiras, || (OU) retorna verdadeiro se pelo menos uma for verdadeira, e ! (NÃO) inverte o valor lógico.
*/

// Estrutura
//     Estrutura de controle/decisão

//     Laços de repetição

// Arrays --> vetor

// Funções personalizadas
