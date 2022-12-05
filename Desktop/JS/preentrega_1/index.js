let usuarioConMail = "nahuel@abc.com"
let contrasenia = "1234"


// a) A través de 3 prompts, pídale al usuario que ingrese su nombre, usuario y su contraseña. Valide que el usuario y la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre sí. En el caso de que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erróneo" o "Su contraseña es errónea". EN EL CASO DE QUE SE EQUIVOQQUE EN LOS DOS: "SU USUARIO Y CONTRASEÑA SO ERRÓNEOS".
// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea.
let nombre = prompt("Ingrese su nombre");
let user = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");

const validarUsuario = (user, pass) => {

    if (contrasenia != pass && usuarioConMail == user){
        alert("Su contraseña es errónea")
    }
    else if (usuarioConMail != user && contrasenia == pass){
        alert("Su usuario es erróneo")
    }
    else if (usuarioConMail != user && contrasenia != pass){
        alert("Su usuario y contaseña son erróneos")
    }else
        alert(`Bienvenido ${nombre}`)

}

validarUsuario(user,pass)

// c) Valide con un bucle que el usuario tiene una arroba. De ser así, envíe el mensaje en consola: "Es un mail válido" e interrumpa el ciclo for con break. 
const validarArroba = (user) => {
    for (i=0 ; i < user.lenght ; i++){
        if (user[i].match(/[@]/)){
            console.log("Es un mail válido")
            break
        } else if (i == (user.lenght -1)){
            console.log("es un mail invalido")
        }
}
}

validarArroba(user)

// d) Valide si la contraseña del usuario tiene más de 8 caracteres. En el caso de que tenga más de ocho caracteres, no haga nada. De lo contrario, envíe una alerta con el siguiente mensaje: "Su contraseña es insegura."
const validarContra = (pass) => {
    if (pass.lenght <= 8){
        console.log("Su contraseña es insegura")
    }
}

validarContra(pass)


// e) Valide con un bucle que la contraseña al menos tenga un número. En el caso de que no tenga uno, envíe un prompt que exprese lo siguiente: "Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?". Si el usuario dice si, entonces cambie el valor de la contraseña.


