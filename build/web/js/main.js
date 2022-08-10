function login() {
  let usuario = document.getElementById("usuario"),
    contrasena = document.getElementById("contraseña");
  if (usuario.value == "admin" && contrasena.value == "admin") {
    window.location.href = "/build/web/modules/home.html";
  } else {
    alert("Datos incorrectos");
  }
}
function logOut() {
  window.location.href = "/build/web/";
}

let moduloCliente;

function cargarModuloClientes() {
  fetch("/build/web/modules/moduloClientes/view_Clientes.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById("contenedorPrincipal").innerHTML = html;
      import("/build/web/modules/moduloClientes/controller_Clientes.js").then(
        function (controller) {
          moduloCliente = controller;
        }
      );
    });
}

let moduloEmpleado;

function cargarModuloEmpleados() {
  fetch("/build/web/modules/moduloEmpleados/view_Empleados.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById("contenedorPrincipal").innerHTML = html;
      import("/build/web/modules/moduloEmpleados/controller_Empleados.js").then(
        function (controller) {
          moduloEmpleado = controller;
        }
      );
    });
}

let moduloArmazon;

function cargarModuloArmazones() {
  fetch("/build/web/modules/moduloArmazones/view_Armazon.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById("contenedorPrincipal").innerHTML = html;
      import("/build/web/modules/moduloArmazones/controller_Armazones.js").then(
        function (controller) {
          moduloArmazon = controller;
        }
      );
    });
}
