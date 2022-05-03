import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "jgarcia", nombre: 'Jeremias', apellido: "Garcia", sexo: 'Masculino'},
    {usuario: "fcorvalan", nombre: 'Franco', apellido: "Corvalan", sexo: 'Masculino'},
    {usuario: "arossi", nombre: 'Antonella', apellido: "Rossi", sexo: 'Femenino'}
  ];
  
  constructor() { }

  getUSuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
