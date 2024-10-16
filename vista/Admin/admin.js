// admin.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('/reservas')  // Esta es la ruta que definimos en el servidor
        .then(response => response.json())  // Convertimos la respuesta en JSON
        .then(data => {
            const tablaReservas = document.getElementById('tablaReservas');
            data.forEach(reserva => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${reserva._id}</td>
                    <td>${reserva.usuario}</td>
                    <td>${reserva.fecha}</td>
                    <td>${reserva.estado}</td>
                `;
                tablaReservas.appendChild(fila);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});
