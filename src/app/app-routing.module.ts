import{NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReclamoComponent } from './components/reclamo/reclamo.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
    {path: 'usuario', component:UsuariosComponent},
    {path: 'reclamo', component: ReclamoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}