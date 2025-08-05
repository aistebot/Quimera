// Clase Usuario
class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.password = password;
  }
}

// Usuarios pregargados
let usuarios = [
  new Usuario("Agustina", "1234"),
  new Usuario("Juan", "abcd"),
  new Usuario("María", "pass123")
];

console.log("Usuarios pregargados:");
usuarios.forEach(u => console.log(u));

// Capturar elementos del DOM
const form = document.getElementById("loginForm");
const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("password");
const mensaje = document.getElementById("mensaje");



// Validar login
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuarioIngresado = inputUsuario.value.trim();
  const passwordIngresado = inputPassword.value.trim();

  // Buscar usuario
  const usuarioEncontrado = usuarios.find(
    u => (u.nombre === usuarioIngresado || u.email === usuarioIngresado) && u.password === passwordIngresado
  );

  if (usuarioEncontrado) {
    mensaje.innerHTML = `<div class="alert alert-success">Bienvenido, ${usuarioEncontrado.nombre} 🎉</div>`;
  } else {
    mensaje.innerHTML = `<div class="alert alert-danger">Usuario o contraseña incorrectos ❌</div>`;
  }
});
