import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceEmpleado2 {
    constructor(private _http: HttpClient) {

    }

    getOficios(): Observable<any> {
        var request = '/api/Empleados/oficios';
        var url = Global.urlempleados + request;
        return this._http.get(url);
    }

    getEmpleadosByOficio(oficio: string): Observable<any> {
        var request = '/api/Empleados/EmpleadosOficio/' + oficio;
        var url = Global.urlempleados + request;
        return this._http.get(url);
    }
}