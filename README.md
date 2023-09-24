# Pacote npm - Remover Valores Duplicados

Este pacote npm contém uma função capaz de remover valores duplicados de uma lista. A função recebe uma lista como entrada e retorna uma nova lista contendo apenas os valores únicos presentes na lista original, ou seja, remove quaisquer valores duplicados.

## Como Usar

Para utilizar esta função em seu projeto, siga estas etapas:

1. Instale o pacote npm em seu projeto:

   ```shell
   npm install meu-pacote-unico
   
2. Importe a função em seu código JavaScript ou TypeScript:
   const { removerValoresDuplicados } = require('remover-valores-duplicados');
// Ou, se você estiver usando módulos ES6:
// import { removerValoresDuplicados } from 'remover-valores-duplicados';

3. Use a função removerValoresDuplicados para remover valores duplicados de uma lista:
   const listaOriginal = [1, 2, 2, 3, 4, 4, 5];
const listaUnica = removerValoresDuplicados(listaOriginal);
console.log(listaUnica); // Deverá imprimir [1, 2, 3, 4, 5]

