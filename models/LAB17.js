//LAB 17: DATABASE

const db = require('../util/database')
module.exports = class Panque {
    constructor(nuevo_nombre,nueva_descripcion,nueva_imagen){
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }
    save(){
        return db.execute('INSERT INTO panques (nombre, descripcion, imagen) VALUES (?,?,?)',
        [this.nombre,this.descripcion,this.imagen]);
    }
    static fetchAll(){
        return db.execute('SELECT * FROM panques')
    }
}