
const panques = [
    {nombre:"Plátano"}, 
    {nombre:"Manzana"}, 
    {nombre:"Calabaza"}
    ]; 
    
    module.exports = class Panque {
        constructor(nuevo_nombre){
            this.nombre =nuevo_nombre;
        }
        save(){
            panques.push(this);
            console.log(panques);
        }
        static fetchAll(){
            return panques;
        }
    }