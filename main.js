//1
let miNombre = "santiago";
//2
let miApellido ="Gamarra";
//3
let miEdad = 29;
//4
let miMascota = "Renee";
//5
let edadMascota = 4;

//6
console.log(miNombre, miApellido, miEdad, miMascota);
//7
let nombreCompleto = miNombre+" "+miApellido
//8
let textoPresentacion = `Mi nombre es ${nombreCompleto} ${miApellido} y tengo ${miEdad} años mi mascota se  llama ${miMascota} y tiene ${edadMascota} años`
console.log(textoPresentacion)

//9
let sumaEdades = miEdad+edadMascota
let restaEdades = miEdad-edadMascota
let productoEdades = miEdad*edadMascota
let divisionEdades = miEdad/edadMascota

//10
let textoPresentacion2=`Si sumo mi edad y la edad de mi mascota me da como resultado ${sumaEdades}. Si resto mi edad y la de mi mascota me da como resultado ${restaEdades}. Si multiplico mi edad y la de mi mascota me da como resultado ${productoEdades}. Si divido mi edad por la edad de mi mascota me da como resultado ${divisionEdades}`
console.log(textoPresentacion2)