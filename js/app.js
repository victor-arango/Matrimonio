import {insertar} from './firebase.js';


window.addEventListener('DOMContentLoaded',()=>{

    





});
// import { insertar } from "./firebase.js";

// const buttonForm = document.querySelector('#button_form');
const formulario = document.querySelector('#confirmar-form');
// const invitado = document.querySelector('#numInvitados');
// const nombres = document.querySelector('#nombreInvitados')



// //isnserccion en la base de datos.



formulario.addEventListener('submit', e =>{
    e.preventDefault();

   const NumeroInvitados = formulario['addInvitado']
    const NombreInvitad = formulario['nombreInvitados']

    insertar(NumeroInvitados.value, NombreInvitad.value);
    formulario.reset();

    Swal.fire(
        'Gracias!',
        'Los datos fueron registrados con exito!',
        'success'
      )
});

