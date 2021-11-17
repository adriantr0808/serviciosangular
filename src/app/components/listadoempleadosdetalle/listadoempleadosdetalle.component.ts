import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { ServiceEmpleado } from 'src/app/services/empleado.service';
@Component({
  selector: 'app-listadoempleadosdetalle',
  templateUrl: './listadoempleadosdetalle.component.html',
  styleUrls: ['./listadoempleadosdetalle.component.css']
})
export class ListadoempleadosdetalleComponent implements OnInit {

  public empleados!: Array<Empleado>
  constructor(private _service: ServiceEmpleado) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this._service.getEmpleados().subscribe(res => {
      this.empleados = res;
      console.log(this.empleados)
    });
  }

}
