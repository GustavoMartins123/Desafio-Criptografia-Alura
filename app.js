let texto = document.querySelector('textarea');
let img = document.getElementById('imagem');
let mensagem = document.getElementById('mensagem');
let nenhumaMensagem = document.getElementById('nenhumaMensagem');
let textAreaMensagem = document.getElementById('textAreaMensagem');

function criptografarTexto() {

    if (/^[a-z][a-z\s]*$/.test(texto.value) === false) {
        alert('Por favor, insira apenas letras minúsculas sem caracteres especiais, acentos e números.');
        texto.value = '';
        return;
    }
    const substituicoes = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    };

    textAreaMensagem.hidden = false;    
    textAreaMensagem.style.fontSize = '2rem';
    textAreaMensagem.textContent = texto.value.split('').map(char => substituicoes[char] || char).join('');
    
    imagem.style.display = 'none';
    let btnCopy = document.getElementById('btnCopy');
    btnCopy.hidden = !imagem.style.display == 'none';
    let resultadoContainer = document.getElementById('resultado');
    resultadoContainer.style.backgroundColor = '#F6F6F6';
    nenhumaMensagem.style.opacity = 0;
    mensagem.style.opacity = 0;
    setBtnDescrip(false);
}

function descriptografarTexto() {
    const substituicoes = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',
    };

    const regex = new RegExp(Object.keys(substituicoes).join('|'), 'g');
    textAreaMensagem.textContent = texto.value.replace(regex, match => substituicoes[match]);
    setBtnDescrip(true);
}

function copiarTexto() {
    textAreaMensagem.focus();
    textAreaMensagem.select();
    textAreaMensagem.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textAreaMensagem.textContent);

    alert('Copiado para a area de transferencia')

    window.getSelection().removeAllRanges();

}

function setBtnDescrip(ativadoDesabilitado) {
    let btnDescrip = document.getElementById('btnDescrip');
    let btnCrip = document.getElementById('btnCrip');
    btnDescrip.disabled = ativadoDesabilitado;
    btnCrip.disabled = !ativadoDesabilitado;
    texto.disabled = !ativadoDesabilitado;
}


