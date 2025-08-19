let listAmigos[];
function añadirAmigo(){
    let amigos=0;
    let nuevoAmigo=document.getElementById('amigo');
    listAmigos[amigos].push(nuevoAmigo);
    amigos ++;
}
function limpiarCaja(){
    document.querySelector('#Valor usuario').value='';
}
