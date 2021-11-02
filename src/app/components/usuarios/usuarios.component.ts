import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listUsuarios:Usuario[]=[];
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getLista().subscribe((datoServe)=>{
      if(datoServe.estado=='ok'){
        this.listUsuarios=datoServe.lista;
      }
  });
  }

}
