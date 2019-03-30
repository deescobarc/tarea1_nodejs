//Se exportan los datos y funciones creados previamente
const {cursos,mostrarCursos,crearArchivo} = require ('./datos');
const express = require('express')
const app = express()
const port = 3000

const opciones = {
    id_curso:{
        demand:true,
        alias: 'i'
    },
    nombre:{
        demand:true,
        alias: 'n'
    },
    cedula:{
        demand:true,
        alias: 'c'
    }
}

const argv = require('yargs')
            .command ('inscribir','Inscribirse en un curso', opciones)
            .argv


//Se valida que se haya ejecutado el comando inscribir para hacer la matrícula, en caso contrario se listan los cursos disponibles            
if(argv._[0] == 'inscribir'){
    //Se realiza la búsqueda del curso
    let cursoEncontrado = cursos.find(curso => curso.id == argv.i)
    //Se valida si se encuentra el curso, en caso de que no se da un aviso y se listan los cursos disponibles
    if(cursoEncontrado){
        let estudiante = {
            cedula: argv.c,
            nombre: argv.n
        };
        texto = 'El estudiante ' + estudiante.nombre + '\r\n' +
        'con cédula ' + estudiante.cedula + '\r\n' +
        'Se ha matriculado en el curso ' + cursoEncontrado.nombre + '\r\n' +
        'Que tiene una duración de ' + cursoEncontrado.duracion + ' horas y un valor de $' + cursoEncontrado.valor + '\r\n';
        app.get('/', (req, res) => res.send(texto))
        app.listen(port, () => console.log(`Se ha publicado la información en localhost:${port}`)) 
    }else{
        console.log('El curso con id '+argv.i+' no fue encontrado');
        mostrarCursos(cursos); 
    }     
}else{
    mostrarCursos(cursos);
}

