const ehHoje = new Date(); // pega a data atual
const invenTorrone = new Date(1441, 8, 1, 0, 0, 0); // atribui data aleatória de 1441 (quando surgiu o torrone)
const aniverTorrone = Math.abs(ehHoje.getTime() - invenTorrone.getTime()); // subtrai as datas pela qtd de milissegundos de cada
const osDias = Math.ceil(aniverTorrone / (1000 * 60 * 60 * 24)); //divide o resultado da operação anterior pelos milissegundos correspondentes a 1 dia

//usando botão com alerta pq não consegui aprender a imprimir o resultado em texto
var button = document.querySelector('button');
button.onclick = function() { 
    alert('Da invenção do Torrone até agora, já se passaram ' + osDias + ' dias!');
    }