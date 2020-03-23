
// ** DECLARACIONES **
// Base de Datos
let usuarioDb = '1234',
    passDb = '1234',
    saldo = 1000;

// Sistema
let userSistem = prompt('Ingrese RUT'),
    passSistem = prompt('Ingrese PIN');

// ** FUNCIONES **
// Simula búsqueda BD y compara si existe
function login( user, pass ) {
    if ( user === usuarioDb && pass === passDb ) {
        // Usuario logueado
        console.log('Usuario Logueado!');
        return seleccionaOperacion();

    } else {
        // Rechazo logueo
        console.log('RUT o PIN inválidos, por favor intente nuevamente');
        return salir();

    }
}



// Elegir OPERACION a realizar
function seleccionaOperacion() {
    let numeroOperacion = prompt('Ingrese Opción: 1-Deposito; 2-Retiro; 3-Consulta; 4-Cambio Clave; 5-Cancelar');
    if ( numeroOperacion === '1' ) {
        // Depositar
        depositar();

    } else if ( numeroOperacion === '2' ) {
        // Retirar
        retirar();

    } else if ( numeroOperacion === '3' ) {
        // Consultar
        consultar();

    } else if ( numeroOperacion === '4' ) {
        // Cambio de Clave
        cambioClave();

    } else if ( numeroOperacion ===  '5' ){
        // Cancelar
        return salir();
    } else {
        // Opción invalida
        console.log('Opción inválida, intente nuevamente')
        return seleccionaOperacion();
    }
}



// OP1: DEPOSITAR
function depositar() {
   let ingresoBilletes = parseInt( prompt('Ingrese la cantidad exacta') );
       saldo += ingresoBilletes;

   console.log('Depósito exitoso, su saldo actual es de $: ' + saldo);
}



// OP2: RETIRAR
function retirar() {
    let montoRetirar = parseInt( prompt('Ingrese la cantidad a Retirar') );
    if ( montoRetirar <= saldo ) {
        // Realizar retiro
        saldo -= montoRetirar;
        console.log('Retiro exitoso, su saldo actual es: ' + saldo );
    } else {
        // No se realiza el retiro
        console.log('Saldo insuficiente, ingrese un monto menor')
    }
}



// OP3: CONSULTAR
function consultar() {
    return console.log('Su saldo es $: ' + saldo );
}



// OP4: CAMBIO CLAVE
function cambioClave() {
    let claveActual = prompt('ingrese su clave ACTUAL'),
        nuevaClave = prompt('ingrese nueva clave'),
        repiteNuevaClave = prompt('ingrese nueva clave');

    if ( claveActual === passDb && nuevaClave === repiteNuevaClave ) {
        // Guarda clave a la BD
        pass = nuevaClave;

        console.log('Clave guardada exitosamente');
    } else {
        console.log('Error al crear la nueva clave');
    }


}



// SALIR
function salir() {
    return console.log('Gracias por usar Bancajeros');
}


// ** LLAMADO FUNCIONES **
login( userSistem, passSistem );