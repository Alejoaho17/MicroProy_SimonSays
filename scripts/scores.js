function mostrarPuntos() {
    let lista = document.getElementById("puntuacion");

    // Obtener los datos desde localStorage
    let usuariosGuardados = localStorage.getItem("puntuaciones");

    if (usuariosGuardados) {
        let usuarios = JSON.parse(usuariosGuardados); // Convertir a array

        // Limpiar la lista antes de agregar elementos
        lista.innerHTML = "";

        // Recorrer y mostrar cada usuario
        usuarios.forEach(usuario => {
            let item = document.createElement("li");
            item.textContent = `Puntaje: ${usuario.puntos} - Usuario: ${usuario.nombre}`;
            lista.appendChild(item);
        });
    } else {
        lista.innerHTML = "<li>No hay usuarios guardados.</li>";
    }
}

function mostrarTabla() {
    let tbody = document.querySelector("#tabla tbody");

    // Obtener datos desde localStorage
    let usuariosGuardados = localStorage.getItem("puntuaciones");

    if (usuariosGuardados) {
        let usuarios = JSON.parse(usuariosGuardados);

        // Limpiar tabla antes de agregar nuevos datos
        tbody.innerHTML = "";

        // Recorrer los usuarios y agregarlos a la tabla
        usuarios.forEach(usuario => {
            let fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${usuario.puntos}</td>
                <td>${usuario.nombre}</td>
            `;
            tbody.appendChild(fila);
        });
    } else {
        tbody.innerHTML = "<tr><td colspan='3'>No hay usuarios guardados.</td></tr>";
    }
}

 