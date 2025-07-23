
            /*metodo para selecionar os 2 inputs*/ 
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const handleFocus = ({target})=>{
   const span = target.previousElementSibling;
   span.classList.add('span-active');
}

const handleFocusOut = ({target}) =>{

  if(target.value === ''){

   const span = target.previousElementSibling;
   span.classList.remove('span-active');

  }

  
}

const handleChange = () =>{
  const[username, password] = inputs;

  if(username.value && password.value >=8){
      button.removeAttribute('disabled');
  } else{
      button.setAttribute('disabled','');
  }
}

/* para cada elemento */
inputs.forEach((input) => input.addEventListener('focus',handleFocus));
/*Função para quando sair de focus */
inputs.forEach((input) => input.addEventListener('focus',handleFocusOut));
inputs.forEach((input) => input.addEventListener('input',handleChange));