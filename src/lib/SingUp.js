// creacion de formulario sign up

export function FormularioDeRegistro(){
     
     let vaciar =  document.getElementById("Body") 
     vaciar.innerHTML = ""
    const NewForm = document.createElement("form");

    // const Main = document.getElementsByTagName("main")
    // const Formulario = 
    
    NewForm.innerHTML= `
    
    <h1> Created account </h1>
    <fieldset>

    <input type="text" id="NameUser" class="input"  placeholder="User name" maxlength="10"   title="Maximo 16 caracteres" required
    "> 
    <span id="CampoVacioName"></span>

    <input type="email"id="EmailUser"class="input" placeholder="email"> 
    <span id="CampoVacioEmail"></span>

    <input type="password" id="PasswordUser"class="input" placeholder ="password"> 
    <span id="CampoVacioPassword"></span>
    
    <button type="submit" id="Register" class="btn" > REGISTER <a href="#Register"> </a> </button>
    </fieldset>
    `;
   document.getElementById("Body").appendChild(NewForm)

// Valores de los inputs



   const Submit    = document.getElementById("Register")    
         Submit.addEventListener("click", (event)=>{

         event.preventDefault();
         console.log("enviado")
         
   const Name     = document.getElementById("NameUser").value;
   const Email    = document.getElementById("EmailUser").value;
   const Password = document.getElementById("PasswordUser").value; 

      if (Email == "") {
         document.getElementById("CampoVacioEmail").textContent = "Este campo esta vacio"
         
      }
       else if (Name == "") {
         document.getElementById("CampoVacioName").textContent = "Este campo esta vacio"
         
      }
       else if (Password =="") {
         document.getElementById("CampoVacioPassword").textContent = "Este campo esta vacio"
         
      }
 
})
  
}

  

