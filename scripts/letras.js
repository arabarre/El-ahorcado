var listaLTr = document.querySelector('.listaLetras');
var imageAyuda = document.querySelectorAll('.img-categoria');
var ayudaT = document.querySelector('.ayudaT');

for (let i = 0; i < imageAyuda.length; i++) {
	imageAyuda[i].addEventListener('mouseover', (e) => {
		if (i == 0) {
			ayudaT.innerHTML = 'Alura instructores';
		}
		if (i == 1) {
			ayudaT.innerHTML = 'Deportes';
		}
		if (i == 2) {
			ayudaT.innerHTML = 'Lenguajes programación';
		}
		if (i == 3) {
			ayudaT.innerHTML = 'Paises de América';
		}
		if (i == 4) {
			ayudaT.innerHTML = 'Películas';
		}

		if (i == 5) {
			ayudaT.innerHTML = 'Todas';
		}

		ayudaT.classList.add('ayudaVer');
		ayudaT.classList.remove('ayudaT');
	});
	imageAyuda[i].addEventListener('mouseout', (e) => {
		ayudaT.classList.remove('ayudaVer');
		ayudaT.classList.add('ayudaT');
	});
}

function construirBt(clase, contexto) {
	var td = document.createElement('td');

	const button = document.createElement('button');
	button.type = 'button';
	button.classList.add(clase);
	button.innerText = contexto;
	return button;
}
// Crea los botones con las letras
for (let i = 65; i <= 90; i++) {
	listaLTr.appendChild(construirBt('buttonletra', String.fromCharCode(i)));
	if (i === 78) {
		listaLTr.appendChild(construirBt('buttonletra', 'Ñ'));
	}
}
