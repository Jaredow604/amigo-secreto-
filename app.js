let amigos = [];
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    if (nombreAmigo !== '') {
        amigos.push(nombreAmigo);
        console.log('Arreglo actualizado:', amigos);
        actualizarLista();
        inputAmigo.value = '';
    } else {
        alert('Por favor, inserte un nombre.');
    }
}
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debes agregar al menos un amigo para poder sortear.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}
function reiniciarJuego() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}