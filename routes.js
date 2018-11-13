const Usuario = require('./models/Usuario');
const Direccion = require('./models/Direccion');

module.exports = [
  {
    method: 'GET',
    path: '/api/usuarios',
    handler: function(request, h){//el reply es el mismo de hapi, tendria que ser return!!

        return new Promise((resolve)=>{//para esta version toca asi!!!!!!
          Usuario.find(function(error, usuarios){
            if(error){
              console.error(error);
              resolve("error");
            }
            resolve(usuarios);
            //return(usuarios);
        });
      });
    }
  },
  {
    method: ['PUT','POST'],
    path: '/api/usuarioCrear',
    handler: function(request, h){
      const usuario = new Usuario({
        id: request.payload.id,//mongo crea automaticamente un id, _id!!!!
        Nombre: request.payload.Nombre,
        Apellido: request.payload.Apellido,
        Email: request.payload.Email,
        contraseña: request.payload.contraseña
      });
      return new Promise((resolve)=>{
        usuario.save(function(error, usuario){
          if(error){
            console.error(error);
          }
          resolve(usuario.id);
        });
      });

    }
  },
  {
    method:['PUT','POST'],
    path: '/api/creaDireccion',
    handler: function(request,h){
      const direccion = new Direccion({
        id: request.payload.id,
        userId: request.payload.userId,
        longitud: request.payload.longitud,
        latitud: request.payload.latitud,
        direccion: request.payload.direccion,
        descripcion: request.payload.descripcion
      });
      return new Promise((resolve)=>{
        direccion.save(function(error, direccion){
          if(error){
            console.error(error);
          }
          resolve(direccion.id, direccion.userId);
        });
      });
    }
  }

];
