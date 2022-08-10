let indexEmpleadoSeleccionado;
let empleados = [];

export function addEmpleado() {
  let numero_unico_empleado,
    nombre,
    apellido_paterno,
    apellido_materno,
    genero,
    rfc,
    telefono,
    telefono_movil,
    correo_electronico,
    usuario,
    contrasena;

  numero_unico_empleado = document.getElementById("txtNumUnico").value;
  nombre = document.getElementById("txtNombre").value;
  apellido_paterno = document.getElementById("txtApePaterno").value;
  apellido_materno = document.getElementById("txtApeMaterno").value;
  telefono = document.getElementById("txtTelefono").value;
  telefono_movil = document.getElementById("txtMovil").value;
  correo_electronico = document.getElementById("txtCorreo").value;
  rfc = document.getElementById("txtRfc").value;

  genero = document.getElementById("txtGenero").value;
  usuario = document.getElementById("txtUsuario").value;
  contrasena = document.getElementById("txtContraseña").value;

  let dato = apellido_paterno.substring(-1, 2);
  let aleatorio = Math.random().toString(36).substr(2, 10);

  if (apellido_materno == "") {
    apellido_materno = "x";
  }

  if (
    nombre == "" ||
    apellido_paterno == "" ||
    rfc == "" ||
    telefono == "" ||
    telefono_movil == "" ||
    correo_electronico == "" ||
    usuario == "" ||
    contrasena == ""
  ) {
    Swal.fire({
      text: "Todos los campos son obligatorios",
      icon: "error",
      showConfirmButton: false,
      timer: 1400,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (correo_electronico.match(mailformat)) {
      let empleado = {};
      empleado.numero_unico_empleado = "RF01";
      empleado.nombre = nombre;
      empleado.apellido_paterno = apellido_paterno;
      empleado.apellido_materno = apellido_materno;
      empleado.telefono = telefono;
      empleado.telefono_movil = telefono_movil;
      empleado.correo_electronico = correo_electronico;
      empleado.rfc = rfc;
      empleado.genero = genero;
      empleado.clave = dato + aleatorio;
      empleado.usuario = usuario;
      empleado.contrasena = contrasena;
      empleado.estatus = "Activo";
      empleados.push(empleado);

      Swal.fire({
        text: "Empleado registrado",
        icon: "success",
        showConfirmButton: false,
        timer: 1400,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      clean();
      loadTabla();
    } else {
      Swal.fire({
        text: "Correo Inválido",
        icon: "warning",
        showConfirmButton: false,
        timer: 1400,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      document.getElementById("txtCorreo").classList.add("input-email");
      document.getElementById("txtCorreo").focus();
    }
  }
}

export function loadTabla() {
  let cuerpo = "";
  empleados.forEach(function (empleado) {
    let registro =
      '<tr onclick="moduloEmpleado.selectEmpleado(' +
      empleados.indexOf(empleado) +
      ');">' +
      "<td>" +
      empleado.nombre +
      "</td>" +
      "<td>" +
      empleado.apellido_paterno +
      " " +
      empleado.apellido_materno +
      "</td>" +
      "<td>" +
      empleado.genero +
      "</td>" +
      "<td>" +
      empleado.telefono +
      "</td>" +
      "<td>" +
      empleado.telefono_movil +
      "</td>" +
      "<td>" +
      empleado.correo_electronico +
      "</td>" +
      "<td>" +
      empleado.clave.toUpperCase() +
      "</td>" +
      "<td>" +
      empleado.usuario +
      "</td>" +
      "<td>" +
      empleado.contrasena +
      "</td>" +
      "<td>" +
      empleado.estatus +
      "</td></tr>";
    cuerpo += registro;
  });
  console.log(cuerpo);
  document.getElementById("tblEmpleado").innerHTML = cuerpo;
}

export function selectEmpleado(index) {
  document.getElementById("txtNumUnico").value =
    empleados[index].numero_unico_empleado;
  document.getElementById("txtNombre").value = empleados[index].nombre;
  document.getElementById("txtApePaterno").value =
    empleados[index].apellido_paterno;
  document.getElementById("txtApeMaterno").value =
    empleados[index].apellido_materno;
  document.getElementById("txtTelefono").value = empleados[index].telefono;
  document.getElementById("txtMovil").value = empleados[index].telefono_movil;
  document.getElementById("txtCorreo").value =
    empleados[index].correo_electronico;
  document.getElementById("txtRfc").value = empleados[index].rfc;
  document.getElementById("txtGenero").value = empleados[index].genero;
  document.getElementById("txtClave").value = empleados[index].clave;
  document.getElementById("txtUsuario").value = empleados[index].usuario;
  document.getElementById("txtContraseña").value = empleados[index].contrasena;
  document.getElementById("txtClave").classList.add("disabled");
  document.getElementById("btnUpdate").classList.remove("disabled");
  document.getElementById("btnDelete").classList.remove("disabled");
  document.getElementById("btnAdd").classList.add("disabled");
  indexEmpleadoSeleccionado = index;
}

export function clean() {
  document.getElementById("txtNumUnico").value = "";
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtApePaterno").value = "";
  document.getElementById("txtApeMaterno").value = "";
  document.getElementById("txtTelefono").value = "";
  document.getElementById("txtMovil").value = "";
  document.getElementById("txtCorreo").value = "";
  document.getElementById("txtRfc").value = "";
  document.getElementById("txtContraseña").value = "";
  document.getElementById("txtClave").value = "";
  document.getElementById("txtUsuario").value = "";

  document.getElementById("txtNombre").focus();
  document.getElementById("btnUpdate").classList.add("disabled");
  document.getElementById("btnDelete").classList.add("disabled");
  document.getElementById("btnAdd").classList.remove("disabled");
  document.getElementById("txtClave").classList.remove("disabled");
  document.getElementById("txtCorreo").classList.remove("input-email");
  indexEmpleadoSeleccionado = 0;
}

export function updateEmpleado() {
  let numero_unico_empleado,
    nombre,
    apellido_paterno,
    apellido_materno,
    genero,
    rfc,
    telefono,
    telefono_movil,
    correo_electronico,
    clave,
    usuario,
    contrasena;

  numero_unico_empleado = document.getElementById("txtNumUnico").value;
  nombre = document.getElementById("txtNombre").value;
  apellido_paterno = document.getElementById("txtApePaterno").value;
  apellido_materno = document.getElementById("txtApeMaterno").value;
  telefono = document.getElementById("txtTelefono").value;
  telefono_movil = document.getElementById("txtMovil").value;
  correo_electronico = document.getElementById("txtCorreo").value;
  rfc = document.getElementById("txtRfc").value;

  genero = document.getElementById("txtGenero").value;

  clave = document.getElementById("txtClave").value;
  document.getElementById("txtClave").classList.add("disabled");
  usuario = document.getElementById("txtUsuario").value;
  contrasena = document.getElementById("txtContraseña").value;

  let empleado = {};
  empleado.numero_unico_cliente = numero_unico_empleado;
  empleado.nombre = nombre;
  empleado.apellido_paterno = apellido_paterno;
  empleado.apellido_materno = apellido_materno;
  empleado.telefono = telefono;
  empleado.telefono_movil = telefono_movil;
  empleado.correo_electronico = correo_electronico;
  empleado.rfc = rfc;
  empleado.genero = genero;
  empleado.clave = clave;
  empleado.usuario = usuario;
  empleado.contrasena = contrasena;
  empleado.estatus = "Activo";
  empleados[indexEmpleadoSeleccionado] = empleado;

  Swal.fire({
    text: "Empleado actualizado",
    icon: "info",
    showConfirmButton: false,
    timer: 1400,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });

  clean();
  loadTabla();
}

export function deleteEmpleado() {
  empleados[indexEmpleadoSeleccionado].estatus = "Inactivo";
  Swal.fire({
    text: "Empleado " + empleados[indexEmpleadoSeleccionado].estatus,
    icon: "warning",
    showConfirmButton: false,
    timer: 1400,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  clean();
  loadTabla();
}

fetch("/build/web/modules/moduloEmpleados/data_Empleados.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsondata) {
    empleados = jsondata;
    console.log(empleados);
    loadTabla();
  });

export function searchEmpleado() {
  let filtro = document.getElementById("txtBusquedaEmpleado").value;

  let resultados = empleados.filter((element) => element.clave === filtro);
  let cuerpo = "";
  resultados.forEach(function (empleado) {
    let registro =
      '<tr onclick="moduloEmpleado.selectEmpleado(' +
      empleados.indexOf(empleado) +
      ');">' +
      "<td>" +
      empleado.nombre +
      "</td>" +
      "<td>" +
      empleado.apellido_paterno +
      " " +
      empleado.apellido_materno +
      "</td>" +
      "<td>" +
      empleado.genero +
      "</td>" +
      "<td>" +
      empleado.telefono +
      "</td>" +
      "<td>" +
      empleado.telefono_movil +
      "</td>" +
      "<td>" +
      empleado.correo_electronico +
      "</td>" +
      "<td>" +
      empleado.clave +
      "</td>" +
      "<td>" +
      empleado.usuario +
      "</td>" +
      "<td>" +
      empleado.contrasena +
      "</td>" +
      "<td>" +
      empleado.estatus +
      "</td></tr>";
    cuerpo += registro;
  });
  console.log(cuerpo);
  document.getElementById("tblEmpleado").innerHTML = cuerpo;
}
