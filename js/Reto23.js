//Definimos nuestra funcion para sumar los cubos
const tipoDeDato = (dato) => typeof(dato)

//Mostramos los datos
console.log(`El dato A es un ${tipoDeDato('A')}`);
console.log(`El dato 0 es un ${tipoDeDato(0)}`);
console.log(`El dato {Nombre: 'Eduardo'} es un ${tipoDeDato({Nombre: 'Eduardo'})}`);
console.log(`El dato [{Nombre: 'Eduardo'},{Nombre: 'Eduardo'}] es un ${tipoDeDato([{Nombre: 'Eduardo'},{Nombre: 'Eduardo'}])}`);