import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleado2 } from 'src/app/services/empleado2.service';
import { Empleado2 } from 'src/app/models/empleado2';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
  public oficios!: Array<string>;
  public empleados!: Array<Empleado2>;

  @ViewChild('cajaoficio') cajaoficio!: ElementRef;
  constructor(private _service: ServiceEmpleado2) { }

  ngOnInit(): void {
    this.mostrarOficios();
  }

  mostrarOficios(): void {
    this._service.getOficios().subscribe(res => {
      this.oficios = res;
      console.log(this.oficios);
    });
  }

  mostrarEmpleadosOficio(): void {
    var ofi = this.cajaoficio.nativeElement.value;
    this._service.getEmpleadosByOficio(ofi).subscribe(res => {
      this.empleados = res;
      console.log(this.empleados);
    });

  }
}
