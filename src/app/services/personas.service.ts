import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas {
    constructor(private _http: HttpClient) {

    }

    //EN LOS METODOS SE SUELE DEVOLVER DIRECTAMENTE LA PROMESA, AUQNUE PODEMOS CREARNOS UNA PROMESA COMO EN VUE
    getPersonas(): Observable<any> {
        var url = Global.urlpersonas;
        return this._http.get(url);
    }
}