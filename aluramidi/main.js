function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
//variavel
let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function() {
        tocaSom('#som_tecla_pom');
    }

    contador = contador + 1;

    console.log(contador);
}
