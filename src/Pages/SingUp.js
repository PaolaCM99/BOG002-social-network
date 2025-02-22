// creacion de formulario sign up
import { autenticacionUsuario } from '../Firebase/firebaseAuth.js';

export function FormularioDeRegistro() {
  const html = `
   <div class="fondo">
   <h1 id="titulo-registro"> Crear cuenta </h1>
      <form id="formulario">
         <div id="Name" class="input">
         <input type="text" id="NameUser"  name="nombre" placeholder="Nombre de usuario" maxlength="10"   title="Maximo 16 caracteres" required >
         <img src="" id="CampoVacioName" class="error">
         </div>
         <div id="Email" class="input">
         <input type="email" id="EmailUser" name="correo" placeholder="Email" required > 
         <img src="" id="CampoVacioEmail" class="error">
         </div>
         <div id="Password" class="input">
         <input type="password" id="PasswordUser" name="password" placeholder ="Contraseña" required >
         <img src="" id="CampoVacioPassword" class="error">
         </div>
         <span id="completar"></span>
         <button type="submit" id="Register" class="btn" > REGISTRARME <a href="#Register"> </a> </button>
   </form>
   </div>`;

  return html;
}
export function DatosDeRegistro() {
  const formulario = document.getElementById('formulario');
  const inputs = document.querySelectorAll('.input');

  const expresiones = {
    nombre: /^[a-zA-Z0-9\_\-]{4,20}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{6,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

  };
  const campos = {
    nombre: false,
    correo: false,
    password: false,
  };
  const validarFormulario = (e) => {
    switch (e.target.name) {
      case 'nombre':
        if (e.target.value !== '' && e.target.value.length > 4 && expresiones.nombre.test(e.target.value)) {
          document.getElementById('Name').style.border = '3px solid green';
          document.getElementById('CampoVacioName').src = './imagenes/comprobado.png';
          campos.nombre = true;
        } else {
          document.getElementById('Name').style.border = '3px solid red';
          document.getElementById('CampoVacioName').src = './imagenes/cancelar.png';
          campos.nombre = false;
        }
        break;
      case 'correo':
        if (expresiones.correo.test(e.target.value)) {
          document.getElementById('Email').style.border = '3px solid green';
          document.getElementById('CampoVacioEmail').src = './imagenes/comprobado.png';
          campos.correo = true;
        } else {
          document.getElementById('Email').style.border = '3px solid red';
          document.getElementById('CampoVacioEmail').src = './imagenes/cancelar.png';
          campos.correo = false;
        }
        break;
      case 'password':
        if (e.target.value.length > 6 || expresiones.password.test(e.target.value)) {
          document.getElementById('Password').style.border = '5px solid green';
          document.getElementById('CampoVacioPassword').src = './imagenes/comprobado.png';
          campos.password = true;
        } else {
          document.getElementById('Password').style.border = '5px solid red';
          document.getElementById('CampoVacioPassword').src = './imagenes/cancelar.png';
          campos.password = false;
        }
        break;
    }
  };

  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  });

  // enlazando el formulario con firebase
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombre && campos.password && campos.correo) {
      const Email = document.getElementById('EmailUser').value;
      const Password = document.getElementById('PasswordUser').value;
      const Name = document.getElementById('NameUser').value;
      autenticacionUsuario(Email, Password, Name);
    } else {
      alert('completa correctamente todos los campos');
    }
  });
  // Mostrar y ocultar contraseña
  const contrasena = document.getElementById('PasswordUser');
  const mostrarPassword = document.getElementById('PasswordUser');
  mostrarPassword.addEventListener('keydown', () => {
    // Eliminamos su type del input
    contrasena.removeAttribute('type');
  });
  mostrarPassword.addEventListener('keyup', () => {
    // Agregamos type de input
    contrasena.setAttribute('type', 'password');
  });
}
