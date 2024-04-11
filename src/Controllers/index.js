import { queue } from './dependencias.js';

const enqueueBtn = document.getElementById('agregarBtn');
const dequeueBtn = document.getElementById('eliminarBtn');
const inputNombre = document.getElementById('inputNombre');
const inputNumeroTelefono = document.getElementById('inputNumero');
const listaContactos = document.getElementById('listaContactos');

enqueueBtn.addEventListener('click', () => {
  const nombre = inputNombre.value;
  const numeroTelefono = inputNumeroTelefono.value;
  if (nombre && numeroTelefono) {
    queue.enqueue(`${nombre}: ${numeroTelefono}`);
    actualizarListaContactos();
    inputNombre.value = '';
    inputNumeroTelefono.value = '';
  } else {
    alert('Por favor, introduce un nombre y un número de teléfono.');
  }
});

dequeueBtn.addEventListener('click', () => {
  const removedContact = queue.dequeue();
  if (removedContact !== "Underflow") {
    alert(`Se ha eliminado el contacto: ${removedContact}`);
    actualizarListaContactos();
  } else {
    alert('La agenda telefónica está vacía.');
  }
});

function actualizarListaContactos() {
  const contactos = queue.printQueue().split('\n');
  listaContactos.innerHTML = '';
  contactos.forEach(contacto => {
    const elementoLista = document.createElement('li');
    elementoLista.textContent = contacto;
    listaContactos.appendChild(elementoLista);
  });
}
