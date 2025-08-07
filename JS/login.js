// Clase Usuario
class Usuario {
  constructor(nombre, password) {
    this.nombre = nombre;
    this.password = password;
  }
}

// Usuarios pregargados
const usuarios = [
  new Usuario("Agustina", "1234"),
  new Usuario("Lezue", "quimera"),
  new Usuario("María", "pass123")
];

// Capturar elementos del DOM
const form = document.getElementById("loginForm");
const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("password");
const mensaje = document.getElementById("mensaje");
const botones = document.getElementById("botones");

// Validar login
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuarioIngresado = inputUsuario.value.trim().toLowerCase();
  const passwordIngresado = inputPassword.value.trim();

  const usuarioEncontrado = usuarios.find(u =>
  u.nombre.toLowerCase() === usuarioIngresado && u.password === passwordIngresado
  );


  mensaje.innerHTML = "";
  botones.innerHTML = "";

  if (usuarioEncontrado) {
    mensaje.innerHTML = `<div class="alert alert-success">Bienvenido, ${usuarioEncontrado.nombre} 🎉</div>`;

    // Mostrar botones con links
    botones.innerHTML = `
      <a href="municion-larga.html" class="btn btn-outline-primary me-2">Munición Larga</a>
      <a href="municion-larga-rc.html" class="btn btn-outline-success me-2">Ir a Ejemplo 2</a>
      <a href="municion-larga-rg.html" class="btn btn-outline-warning">Ir a Ejemplo 3</a>
    `;
  } else {
    mensaje.innerHTML = `<div class="alert alert-danger">Usuario o contraseña incorrectos ❌</div>`;
  }
});