import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login.component';
import { Clientes } from './components/clientes/clientes.component';
import { ClientesForm } from './components/clientes-form/clientes-form.component';
import { AuthGuard } from './services/auth-guard';

const routes: Routes = [
  { path: '', component: Login },
  { path: 'clientes', component: Clientes, canActivate: [AuthGuard]  },
  { path: 'clientes/form/:id', component: ClientesForm, canActivate: [AuthGuard]  },
  { path: '**', redirectTo: '' }  // Ruta fallback, opcional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }