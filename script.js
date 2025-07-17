const clear_btn = document.querySelector('.clear-btn')
const eye_btn = document.querySelector('.eye-btn')

const modal = document.querySelector('.modal')
const dialog_btn = document.querySelector('.dialog-btn')
const email_input = document.querySelector('.input-email')
const password_input = document.querySelector('.input-password')
const eye_close = document.querySelector('.eye-close')
const eye_open = document.querySelector('.eye-open')
clear_btn.addEventListener('click', function(e){
  e.preventDefault()
email_input.value=""

  clear_btn.classList.add("display-none")
})


email_input.addEventListener('input', function(e){
  e.preventDefault()
if(email_input.value){
  clear_btn.classList.remove("display-none")
} else{
  clear_btn.classList.add("display-none")
}
})


eye_btn.addEventListener('click', function(e){
  e.preventDefault()
  eye_open.classList.toggle("display-none")
  eye_close.classList.toggle("display-none")
  password_input.type=password_input.type=="password"? 'text':"password"
})

dialog_btn.addEventListener('click', function(e){
  modal.classList.add("display-none")
})


const welcome_box = document.querySelector('.modal')
setTimeout(function(){
  welcome_box.classList.add("display-none")
},1000*1)