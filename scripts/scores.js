function mostrarTabla() {
    let tbody = document.querySelector("#tabla tbody");

    // Obtener datos desde localStorage
    let usuariosGuardados = localStorage.getItem("puntuaciones");

    if (usuariosGuardados) {
        let usuarios = JSON.parse(usuariosGuardados);
        usuarios.sort((a,b)=> b.puntos - a.puntos)

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

