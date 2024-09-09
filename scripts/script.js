// URL del archivo JSON en la carpeta 'data'
const jsonUrl = 'data/options.json';

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('selectOption');
    const form = document.getElementById('dynamicForm');

    // Función para cargar las opciones en el select desde un archivo JSON
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const options = data.options;
            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.textContent = option.text;
                selectElement.appendChild(opt);
            });
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });

    // Listener para el envío del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Crear objeto con los datos del formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            selectOption: document.getElementById('selectOption').value
        };

        // Imprimir los datos como objeto (no como string)
        console.log(formData);
    });
});
