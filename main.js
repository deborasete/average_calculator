const form = document.getElementById('form-atividade');
const imgAprovado = '<img src=./images/aprovado.png alt="Emoji celebrando">';
const imgReprovado = '<img src=./images/reprovado.png alt="Emoji decepcionado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a média mínima:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(e);

    adicionaLinha();
    atualizaTabela();
    calculaMediaFinal();
    atualizaMediaFinal();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert (`A atividade '${inputNomeAtividade.value}' já foi inserida. Insira uma nova atividade.`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    const mediaFormatada = Number.isInteger(mediaFinal) ? mediaFinal : mediaFinal.toFixed(1);

    document.getElementById('media-final-valor').innerHTML = mediaFormatada;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}
