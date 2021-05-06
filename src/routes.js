
import {home } from './Pages/Home.js';
import {FormularioDeRegistro,  all} from './Pages/SingUp.js';
import {FormularioDeIngreso} from './Pages/Login.js';
 
let content = document.getElementById('root');
 
export const router = (route) => {
    content.innerHTML = "";
    switch(route) {
        case '#/':
            content.innerHTML= home();
            break;
        case '#/signUp':
            content.innerHTML = FormularioDeRegistro();
            all();
            break;
        case '#/login':
             content.innerHTML = FormularioDeIngreso();
             break;
        default:
             console.log('404!!!')
    }
} 





