var botonResolver = document.querySelector('.accion-1');
var botonNuevaPalabra = document.querySelector('.accion-2');
var letrasFalladas = document.querySelector('.letrasFalladas');
var listaTr = document.querySelector('.lista');
var horca = document.querySelector('#img-horca');
horca.src = './images/Horca001.png';
var vigilante = 0;
var mensaje = document.querySelector('.mensaje');
mensaje.innerHTML = '';
var blancos = 0;
var palabraNueva;
var blanco = 0;
var acertadas = 0;
var erradas = 0;
var categoriaNew;
var letraspulsadas = '';
var ganaste = false;
function resolver() {
	ganaste = false;
	mensaje.innerHTML = '';
	blanco = 0;
	acertadas = 0;
	erradas = 0;
	blancos = 0;
	horca.src = './images/Horca001.png';
	letraspulsadas = '';

	var horcaymensajeM = document.querySelector('.horcaymensaje');
	horcaymensajeM.style.display = 'flex';
	var tabladeletrasM = document.querySelector('.tablaletras');
	tabladeletrasM.style.display = 'flex';

	// Remueve las listas de palabras
	function removeAllChildNodes(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}
	removeAllChildNodes(listaTr);
	removeAllChildNodes(listaTrFalladas);
	listaTrFalladas.appendChild(construirTd('sinborde', 'A'));

	function sortea(n) {
		return Math.round(Math.random() * n);
	}

	function construirTd(clase, contexto) {
		var div = document.createElement('div');
		div.classList.add(clase);
		div.textContent = contexto;
		return div;
	}

	categoriaNew = categoria;

	if (categoria === 'todas') {
		categoriaNew = sortea(4);
		if (categoriaNew == 0) {
			categoriaNew = 'aluraInst';
		}
		if (categoriaNew == 1) {
			categoriaNew = 'deportes';
		}
		if (categoriaNew == 2) {
			categoriaNew = 'lenguajes';
		}
		if (categoriaNew == 3) {
			categoriaNew = 'paises';
		}
		if (categoriaNew == 4) {
			categoriaNew = 'peliculas';
		}
	}

	// Toma la lista de palabras de la categoria seleccionada
	listaPalabras = palabras[categoriaNew];
	// Selecciona una palabra al azar
	palabra = listaPalabras[sortea(listaPalabras.length - 1)];
	if (vigilante === 1) {
		palabra = palabraNueva;
		vigilante = 0;
	}
	// Cuenta los espacios en blanco de las palabras
	for (i = 0; i < palabra.length; i++) {
		if (palabra[i] === ' ') {
			blancos += 1;
		}
	}

	// Crea espacio para las palabras a resolver
	for (let i = 0; i < palabra.length; i++) {
		if (palabra[i] != ' ') {
			listaTr.appendChild(construirTd('conborde', ''));
			listaTr.appendChild(construirTd('sinborde', '0'));
		} else {
			listaTr.appendChild(construirTd('sinborde', '0'));
			listaTr.appendChild(construirTd('sinborde', '0'));
		}
	}
}

botonResolver.addEventListener('click', function (event) {
	event.preventDefault();
	resolver();
});

botonNuevaPalabra.addEventListener('click', function (event) {
	event.preventDefault();
	palabraNueva = prompt('Escriba la palabra a buscar en mayúsculas').toUpperCase();
	vigilante = 1;
	resolver();
});
