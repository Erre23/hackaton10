### ¿Cómo defines una función? ###
- Debemos utilizar la palabra reservada function seguido por el nombre de la función, 
- Luego entre parentesis aqui definimos los parametros necesarios a utilizar, que puede tenerlos o no.
- Abrimos llaves y dentro de ellas va el código las operaciones o instrucciones que se realicen con estos paramétros
- La función puede o no retornar un valor, cuando retorna un valor debe contener la palabra reservada return seguida del párametro o valor de retorno.
 
Ejemplo con return:

- funcion que retorna la suma de los dos parametros ingresados
    function suma(param1, param2) {
        return param1 + param2;
    }

- La misma funcion anterior pero con arrow function
    (param1, param2) => param1 + param2;

Ejemplo sin return:

- Función que aumenta en 1 el valor del parametro ingresado.
    function aumentar(param) {
        param++;
    }


### ¿Hasta cuantos argumentospuedes declarar en una función? ###
- Esto depende de cada navegador
- Se recomienda no exceder 