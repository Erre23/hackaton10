//Definimos nuestra funcion para mostrar los datos
const mostrarDatos = (nombre, edad) => {
    // Validamos que se hayan mandado argumentos válidos
    (nombre === null || nombre === '' || Number.isNaN(edad)) 
    ? console.log('El valor del nombre o edad no es correcto')
    : console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`);
}

//Capturamos los datos necesarios.
const nombre = prompt("Ingrese su nombre");
const edad = Number(prompt("Ingrese su edad"));

//LLamamos a nuestra función y mandamos los argumentos.
mostrarDatos(nombre, edad);