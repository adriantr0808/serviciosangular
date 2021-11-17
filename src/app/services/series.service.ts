import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceSeries {

    constructor(private _http: HttpClient) {

    }

    getSeries(): Observable<any> {
        var request = '/api/Series';
        var url = Global.urlseries + request;
        return this._http.get(url);
    }

    getPersonajesById(id: number): Observable<any> {
        var request = '/api/Series/PersonajesSerie/' + id
        var url = Global.urlseries + request;
        return this._http.get(url);
    }
}