const fila = documento. querySelector('.contenedor-carrusel');
const peliculas = documento. querySelectorAll('.pelicula');

const flechaIzquierda = documento. getElementById('flecha-izquierda');
const flechaDerecha = documento. getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha. addEventListener('clic', () => {
	fila. scrollLeft += fila. offsetWidth;

	const indicadorActivo = documento. querySelector('.indicadores .activo');
	if(indicadorActivo. siguienteSibling){
		indicadorActivo. siguienteSibling. classList. add('activo');
		indicadorActivo. classList. remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda. addEventListener('clic', () => {
	fila. scrollLeft -= fila. offsetWidth;

	const indicadorActivo = documento. querySelector('.indicadores .activo');
	if(indicadorActivo. anteriorSibling){
		indicadorActivo. anteriorSibling. classList. add('activo');
		indicadorActivo. classList. remove('activo');
	}
});

// ? ----- ----- ----- ----- de Paginacion
const numeroPaginas = Matemáticas. ceil(peliculas. longitud / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = documento. createElement('botón');

	if(i === 0){
		indicador. classList. add('activo');
	}

	documento. querySelector('.indicadores'). appendChild(indicador);
	indicador. addEventListener('click', (e) => {
		fila. scrollLeft = i * fila. offsetWidth;

		documento. querySelector('.indicadores .activo'). classList. remove('activo');
		e. objetivo. classList. add('activo');
	});
}

// ? ----- ----- ----- ----- flotante
peliculas. forEach((pelicula) => {
	pelicula. addEventListener('mouseenter', (e) => {
		const elemento = e. currentTarget;
		setTimeout(() => {
			peliculas. forEach(pelicula = > pelicula. classList. remove('hover'));
			elemento. classList. add('hover');
		}, 300);
	});
});

fila. addEventListener('mouseleave', () => {
	peliculas. forEach(pelicula = > pelicula. classList. remove('hover'));
});