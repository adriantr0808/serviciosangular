import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceEmpleado } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';


@Component({
  selector: 'app-detallempleados',
  templateUrl: './detallempleados.component.html',
  styleUrls: ['./detallempleados.component.css']
})
export class DetallempleadosComponent implements OnInit {
  public empleado!: Empleado;
  public idEmp!: number;
  constructor(private _activeRoute: ActivatedRoute, private _service: ServiceEmpleado) { }

  ngOnInit(): void {
    this.cargarDetallesEmpleado();
  }

  cargarDetallesEmpleado(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this.idEmp = parseInt(params['id']);
        this._service.findEmpleado(this.idEmp).subscribe(res => {
          this.empleado = res;
          console.log(this.empleado);
        });
      }
    });

  }

}
