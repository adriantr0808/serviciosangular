import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceEmpleado {
    constructor(private _http: HttpClient) {

    }

    getEmpleadoSalario(salario: number): Observable<any> {
        var request = '/api/Empleados/EmpleadosSalario/' + salario;
        var url = Global.urlempleados + request;
        return this._http.get(url);
    }
}