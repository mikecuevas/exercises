/* 
Descrição do problema:

Dois inteiros left e right que representam o intervalo [left, right], retorno o bitwise AND de todos os números nesta faixa, inclusive.

Exemplo 1:

Entrada: esquerda = 5, direita = 7
Saída: 4
Exemplo 2:

Entrada: esquerda = 0, direita = 0
Saída: 0
Exemplo 3:

Entrada: esquerda = 1, direita = 2147483647
Saída: 0
 
Restrições:

0 <= left <= right <= 231 - 1
 
*/


/*
Abordagem
A solução eficiente se baseia no entendimento de que o resultado do AND bit a bit de dois números é um número que possui os bits mais à esquerda comuns a ambos os números até o primeiro bit que difere. Após o primeiro bit diferente, o resultado sempre terá 0s, pois dentro de um intervalo de left a right, haverá pelo menos um par de números cujo bit correspondente difere (um sendo 0 e o outro 1), tornando o resultado do AND para essa posição de bit 0.

Portanto, o problema se reduz a encontrar o prefixo comum das representações binárias de left e right. Minha solução envovle deslocar os bits para a direita de ambos os números até que se tornem iguais, contando o número de deslocamentos. Esse valor comum representa os bits mais à esquerda que permanecem inalterados em todos os números do intervalo. Em seguida, desloca-se o valor comum para a esquerda pelo número de deslocamentos para obter o resultado final.
*/



//Solução

function rangeBitwiseAnd(left: number, right: number): number {
    let shift = 0;
    while (left !== right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }
    return left << shift;
}


/*

Exemplo 1:
left = 5 (binário: 101), right = 7 (binário: 111).
Após deslocar left e right uma vez, obtemos 10 (binário) e 11 (binário), respectivamente.
Após outro deslocamento, ambos são iguais a 1 (binário).
shift é 2, então deslocamos 1 (binário) 2 posições à esquerda, resultando em 100 (binário), que é 4 em decimal.

*/