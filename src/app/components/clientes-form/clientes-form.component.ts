import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  standalone: false,
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesForm implements OnInit {

  cliente: any = {
    nombre: '',
    telefono: '',
    direccion: '',
    estado: true
  };

  isEdit = false;

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== '0') {
      this.isEdit = true;
      this.clientesService.getCliente(+id).subscribe({
        next: data => {
          this.cliente = data;
        },
        error: err => {
          console.error('Error cargando cliente', err);
          alert('Error al cargar cliente');
        }
      });
    }
  }

  saveCliente(): void {
    if (this.isEdit) {
      this.clientesService.updateCliente(this.cliente.id, this.cliente).subscribe({
        next: () => {
          this.router.navigate(['/clientes']);
        },
        error: err => {
          console.error('Error actualizando cliente', err);
          alert('Error al actualizar cliente');
        }
      });
    } else {
      this.clientesService.createCliente(this.cliente).subscribe({
        next: () => {
          this.router.navigate(['/clientes']);
        },
        error: err => {
          console.error('Error creando cliente', err);
          alert('Error al crear cliente');
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}