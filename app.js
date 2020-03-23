
// ** DECLARACIONES **
// Base de Datos
let usuarioDb = "260766627",
    passDb = "1234";

// Sistema
let userSistem = prompt('Ingrese RUT'),
    passSistem = prompt('Ingrese PIN');



// ** FUNCIONES **
// Simula búsqueda BD y compara si existe
function login( user, pass ) {
    if ( user === userSistem && pass === passSistem ) {
        // Usuario logueado

        console.log('Usuario Logueado!');
    } else {
        // Rechazo logueo

        console.log('RUT o PIN inválidos, por favor intente nuevamente');
    }
}

// Elegir Operación
function selectOperation( number ) {
    if ( number === 1 ) {
        // Depositar

    } else if ( number === 2 ) {
        // Retirar

    } else if ( number === 3 ) {
        // Consultar

    } else if ( number === 4 ) {
        // Cambio de Clave

    } else if ( number ===  5 ){
        // Cancelar

    } else {
        // Opción invalida
    }
}