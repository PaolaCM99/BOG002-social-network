export function modalEditar() {
  const modal = document.getElementById('editar_modal');
  const texto = document.getElementById('textoModal');
  const user = firebase.auth().currentUser; // esta variable se usara en el documento firebaseauth
  const nombre = user.displayName;
  texto.innerHTML = ` 
        <form id="form-modal">
        <span class="nombre-usuario">  <i class="fas fa-user-circle"> ${nombre} </i> </span>
        <textarea type="text" placeholder="Escribe aqui"  id="editContenido" value=""> </textarea>

        <div id="fecha-lugar">
           <span class="lugar" > <img src="./imagenes/Location-1.svg"> <input type="text" id= "editLugar" placeholder="Lugar"></span>
        </div>
        </form>
        
           <button type="submit" class="btn" id="actualizar"> Actualizar</button>
           <button type="button"  class="btn" id= "close-post" > <a href="#/release"> Cerrar</a> </button>
           `;

  modal.classList.add('show');
  const cerrar = document.getElementById('close-post');
  cerrar.addEventListener('click', () => {
    modal.classList.remove('show');
  });
}
