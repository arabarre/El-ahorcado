var botonPulsado = document.querySelectorAll('.buttonletra');
var listaTr = document.querySelector('.lista');
var listaTrFalladas = document.querySelector('.listaFalladas');
var letrasValidas = 'ABCDEFGHIJKLMNOÑPQRSTUVWXYZ';
var blanco;
ganaste = false;

function construirTd(clase, contexto) {
	var div = document.createElement('div');
	div.classList.add(clase);
	div.textContent = contexto;
	return div;
}

function teclaPulsada(letra, letraPulsada) {
	if (palabra.includes(letra)) {
		for (i = 0; i < palabra.length; i++) {
			if (palabra[i] === ' ') {
				blanco += 1;
			}
			if (letra === palabra[i]) {
				letraPulsada[i - blanco].innerHTML = letra;
				acertadas += 1;

				if (acertadas + blancos === palabra.length) {
					mensaje.innerHTML = 'Ganaste';
					horca.src = fondoHorcas[10];
					ganaste = true;
				}
			}
		}
	} else {
		erradas += 1;
		horca.src = fondoHorcas[erradas];

		// Llena las letras falladas
		letrasFalladas.classList.remove('hide');
		listaTrFalladas.appendChild(construirTd('conborde', letra));
		listaTrFalladas.appendChild(construirTd('sinborde', '0'));

		if (erradas === 9) {
			mensaje.innerHTML = 'Perdiste era ' + palabra;
		}
	}
}

// Botones clickeados
for (let i = 0; i <= 26; i++) {
	botonPulsado[i].addEventListener('click', function (event) {
		event.preventDefault();
		blanco = 0;

		let letra = event.target.innerText;

		if (letraspulsadas.includes(letra) === false && ganaste === false) {
			letraspulsadas = letraspulsadas + letra;

			var letraPulsada = document.querySelectorAll('.conborde');
			teclaPulsada(letra, letraPulsada);
		}
	});
}

// Botones pulsados con tecla
document.addEventListener('keydown', (event) => {
	let letra = event.key;
	blanco = 0;

	if (
		letraspulsadas.includes(letra) === false &&
		letrasValidas.includes(letra) === true &&
		ganaste === false
	) {
		letraspulsadas = letraspulsadas + letra;

		var letraPulsada = document.querySelectorAll('.conborde');
		teclaPulsada(letra, letraPulsada);
	}
});
