let cursos = [{
    id: 1,
    nombre: 'Inglés nivel 1',
    duracion: 64,
    valor: 410000
},
{
    id: 2,
    nombre: 'Interpretación de pruebas genéticas',
    duracion: 48,
    valor: 295000
},
{
    id: 3,
    nombre: 'Escuela de iniciación deportiva',
    duracion: 48,
    valor: 135000
}]

//Se utiliza para mostrar la información de cada curso y hacer el retardo
let mostrarCurso = (curso,count) => {
    {setTimeout(function(){
        console.log('Id Curso: '+curso.id);
        console.log('Nombre: '+curso.nombre);
        console.log('Duración: '+curso.duracion+' horas');
        console.log('Valor: $'+curso.valor);
        console.log('............................................');
    },2000*count+1);                
    }
}

//Se recorren los cursos y se envía cada uno a la función mostrarCurso para ver el detalle de cada curso
let mostrarCursos = cursos =>{
    console.log('Los cursos que hay disponibles de educación continua son:');
    console.log('............................................');
    let count = 0;
    cursos.forEach(curso =>{
            mostrarCurso(curso,count);
            count = count+1;
        })
}

//Se crear un filesystem para crear el archivo y escribir en el la información de inscripción
const fs = require('fs');  
let crearArchivo = (curso,estudiante) =>{
    texto = 'El estudiante ' + estudiante.nombre + '\r\n' +
            'con cédula ' + estudiante.cedula + '\r\n' +
            'Se ha matriculado en el curso ' + curso.nombre + '\r\n' +
            'Que tiene una duración de ' + curso.duracion + ' horas y un valor de $' + curso.valor + '\r\n'
            fs.appendFile('matricula.txt', texto, (err) => {
                if(err) trow (err);
                console.log('El estudiante '+estudiante.nombre+' se inscribió exitosamente al curso:' + '\r\n' +
                'Id Curso: '+ curso.id + '\r\n' +
                'Nombre: '+ curso.nombre + '\r\n' +
                'Duración: '+curso.duracion+' horas' + '\r\n' +
                'Valor: $'+curso.valor + '\r\n' +
                'La información se registró correctamente en el archivo matricula.txt')
            });
} 

//Se exporta la información y funciones requeridas
module.exports = {
    cursos,
    mostrarCursos,
    crearArchivo
};