import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  standalone: false,
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class Clientes implements OnInit {

  clientes: any[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clientesService.getClientes().subscribe({
      next: data => {
        this.clientes = data;
      },
      error: err => {
        console.error('Error cargando clientes', err);
        alert('Error al cargar clientes');
      }
    });
  }

  deleteCliente(id: number): void {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.clientesService.deleteCliente(id).subscribe({
        next: () => {
          this.loadClientes();
        },
        error: err => {
          console.error('Error eliminando cliente', err);
          alert('Error al eliminar cliente');
        }
      });
    }
  }
}