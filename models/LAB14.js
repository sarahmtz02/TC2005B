
const usuarios = [];

module.exports = class Usuario {
    constructor(nuevo_usuario,nuevo_passwd,nuevo_nombre){
        this.usuario = nuevo_usuario;
        this.password = nuevo_passwd;
        this.nombe = nuevo_nombre;
    }
    save(){
        usuarios.push(this);
        console.log(usuarios);
    }
    static login(usuario, password){
        return true;
    }
}