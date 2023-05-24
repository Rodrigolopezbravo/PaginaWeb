// Escuchar el evento submit del formulario
formulario.addEventListener('submit', function(evento) {
	// Prevenir el comportamiento predeterminado del formulario
	evento.preventDefault();

	// Obtener los valores del formulario
	const nombre = inputNombre.value;
	const email = inputEmail.value;
	const telefono = inputTelefono.value;

	// Crear una nueva fila en la tabla
	const nuevoUsuario = {
		id: usuarios.length + 1,
		nombre,
		email,
		telefono
	};

	usuarios.push(nuevoUsuario);

	const nuevaFila = document.createElement('tr');

	nuevaFila.innerHTML = `
		<td>${nuevoUsuario.id}</td>
		<td>${nuevoUsuario.nombre}</td>
		<td>${nuevoUsuario.email}</td>
		<td>${nuevoUsuario.telefono}</td>
			<td>
				<button class="editar">Editar</button>
				<button class="eliminar">Eliminar</button>
			</td>
	`;

	tabla.appendChild(nuevaFila);

	// Limpiar el formulario
	formulario.reset();
});