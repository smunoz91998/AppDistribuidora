import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login.component';
import { Clientes } from './components/clientes/clientes.component';
import { ClientesForm } from './components/clientes-form/clientes-form.component';

const routes: Routes = [
  { path: '', component: Login },
  { path: 'clientes', component: Clientes },
  { path: 'clientes/form/:id', component: ClientesForm },
  { path: '**', redirectTo: '' }  // Ruta fallback, opcional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }