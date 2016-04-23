var charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+"

var chars = charString.split("")

function gen() {
  var pass = chars[Math.floor(Math.random()*chars.length)] + chars[Math.floor(Math.random()*chars.length)] + chars[Math.floor(Math.random()*chars.length)] + chars[Math.floor(Math.random()*chars.length)] + chars[Math.floor(Math.random()*chars.length)] + chars[Math.floor(Math.random()*chars.length)] + chars[Math.floor(Math.random()*chars.length)]
  document.getElementById("pass").innerHTML = pass
}


document.getElementsByClassName("btn").addEventListener("click", gen)
