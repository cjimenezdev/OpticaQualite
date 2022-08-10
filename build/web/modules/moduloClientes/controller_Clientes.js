let indexClienteSeleccionado;
let clientes = [];

export function addCliente(){
    let numero_unico_cliente, 
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico;

    numero_unico_cliente = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    
    genero = document.getElementById("txtGenero").value;;
    
    let cliente = {};
    cliente.numero_unico_cliente =  "RF01";
    cliente.nombre = nombre;
    cliente.apellido_paterno = apellido_paterno;
    cliente.apellido_materno = apellido_materno;
    cliente.telefono = telefono;
    cliente.telefono_movil = telefono_movil;
    cliente.correo_electronico = correo_electronico;
    cliente.rfc = rfc;
    cliente.genero = genero;
    cliente.estatus = "Activo";
    clientes.push(cliente);
    clean();
    loadTabla();
}

export function loadTabla(){
    let cuerpo = "";
    clientes.forEach(function (cliente){
        let registro =  
                '<tr onclick="moduloCliente.selectCliente('+ clientes.indexOf(cliente) +');">'+
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +  ' '+ cliente.apellido_materno +'</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;
    
}

export function selectCliente(index){
    document.getElementById("txtNumUnico").value = clientes[index].numero_unico_cliente;
    document.getElementById("txtNombre").value = clientes[index].nombre ;
    document.getElementById("txtApePaterno").value = clientes[index].apellido_paterno;
    document.getElementById("txtApeMaterno").value = clientes[index].apellido_materno;
    document.getElementById("txtTelefono").value = clientes[index].telefono;
    document.getElementById("txtMovil").value = clientes[index].telefono_movil;
    document.getElementById("txtCorreo").value = clientes[index].correo_electronico;
    document.getElementById("txtRfc").value = clientes[index].rfc;
    document.getElementById("txtGenero").value = clientes[index].genero;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexClienteSeleccionado = index;
}

export function clean(){
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "" ;
    document.getElementById("txtApePaterno").value = "";
    document.getElementById("txtApeMaterno").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtMovil").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtRfc").value = "";
    
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexClienteSeleccionado = 0;
}

export function updateCliente(){
    let numero_unico_cliente, 
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico;

    numero_unico_cliente = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    
    genero = document.getElementById("txtGenero").value;
    
    let cliente = {};
    cliente.numero_unico_cliente =  numero_unico_cliente;
    cliente.nombre = nombre;
    cliente.apellido_paterno = apellido_paterno;
    cliente.apellido_materno = apellido_materno;
    cliente.telefono = telefono;
    cliente.telefono_movil = telefono_movil;
    cliente.correo_electronico = correo_electronico;
    cliente.rfc = rfc;
    cliente.genero = genero;
    cliente.estatus = "Activo";
    clientes[indexClienteSeleccionado] = cliente;
    clean();
    loadTabla();
}

export function deleteCliente(){
    clientes[indexClienteSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

fetch("/build/web/modules/moduloClientes/data_Clientes.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                clientes = jsondata;
                console.log(clientes);
                loadTabla();
            }            
        );

export function searchCliente(){
    let filtro = document.getElementById("txtBusquedaCliente").value;
    
    let resultados = clientes.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (cliente){
        let registro =  
                '<tr onclick="moduloCliente.selectCliente('+ clientes.indexOf(cliente) +');">'+
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +  ' '+ cliente.apellido_materno +'</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;
}
