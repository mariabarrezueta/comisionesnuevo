import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comisiones',
  templateUrl: './comisiones.component.html',
  styleUrls: ['./comisiones.component.css']
})
export class ComisionesComponent {
  fechaInicio: string = '';
  fechaFin: string = '';
  comisiones: any[] = [];

  constructor(private http: HttpClient) {}

  calcularComisiones() {
    if (!this.fechaInicio || !this.fechaFin) {
      alert('Por favor selecciona ambas fechas');
      return;
    }

    const url = `http://localhost:5189/api/Comisiones?fechaInicio=${this.fechaInicio}&fechaFin=${this.fechaFin}`;
    
    this.http.get<any[]>(url).subscribe({
      next: data => this.comisiones = data,
      error: err => {
        console.error(err);
        alert('Error al consultar las comisiones');
      }
    });
  }
}
