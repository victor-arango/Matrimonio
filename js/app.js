import {insertar} from './firebase.js';


window.addEventListener('DOMContentLoaded',()=>{

    





});
// import { insertar } from "./firebase.js";

// const buttonForm = document.querySelector('#button_form');
const formulario = document.querySelector('#confirmar-form');

// //isnserccion en la base de datos.



formulario.addEventListener('submit', e =>{
    e.preventDefault();

   const NumeroInvitados = formulario['addInvitado']
    const NombreInvitad = formulario['nombreInvitados']

    if (NumeroInvitados.value === '' || NombreInvitad.value === '') {

      Swal.fire(
        'Error!',
        'Debes diligenciar todos los campos !',
        'error'
      )
    }else{
      insertar(NumeroInvitados.value, NombreInvitad.value);
      formulario.reset();
  
      Swal.fire(
          'Gracias!',
          'Los datos fueron registrados con exito!',
          'success'
        )
    }

   
});

