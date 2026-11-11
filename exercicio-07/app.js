/*
  01 - Inverta o valor dos booleans abaixo, para que o console exiba: false true

  console.log(true, false)
*/



/*
  02 - Com o array "animais" abaixo, verifique se 'leão' NÃO existe.

  - Se não existir, exiba "Leão não existe no array animais.";
  - Se existir, exiba "Existe um leão no array animais.".

  Use includes ou indexOf.
*/

const animais = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']



/*
  03 - Some os números do array "valores" abaixo, um por um, com um for.

  Se, durante a soma, o total passar de 400, pare o laço (break) e exiba:

  "A soma ultrapassou 400. Até aqui, o valor atual é TOTAL."
*/

const valores = [59, 61, 73, 57, 35, 73, 21, 87, 43]



/*
  04 - Com o array "frase" abaixo, monte uma frase concatenando os itens.
  Se o item for 'certeza', pule-o (continue). Exiba a frase no console.
*/

const frase = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']



/*
  05 - Com o array "misto" abaixo, percorra os itens somente até o 4º (índice 3).

  Exiba, em formato de lista, usando template string:
  - quais são as 4 primeiras strings;
  - quantos booleans foram percorridos até o fim desse trecho;
  - quantas iterações foram feitas.
*/

const misto = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]



/*
  06 - Declare a const "bebida" com 'água', 'refrigerante' ou 'suco'.

  Use um switch com cases para esses 3 tipos e com default para os demais.
  Guarde a descrição em uma let "descricao" e exiba no console.

  - água: "Substância química formada por dois átomos de hidrogênio e um de oxigênio."
  - refrigerante: "Bebida não alcoólica, gaseificada, à base de água e açúcar."
  - suco: "Bebida produzida a partir do líquido extraído de frutos."
  - default: "Bebida desconhecida."

  Teste também com as outras bebidas.
*/

const bebida = 'suco'



/*
  07 - Reescreva com switch o bloco abaixo, que usa if/else if:

  if (a === 0) {
    console.log(`O valor de "a" é ${a}`)
  } else if (a === 1) {
    console.log(`O valor de "a" é ${a}`)
  } else {
    console.log('O valor de "a" é qualquer número, exceto 0 e 1')
  }

  Depois, troque o valor de "a" para testar os três casos.
*/

const a = 2
