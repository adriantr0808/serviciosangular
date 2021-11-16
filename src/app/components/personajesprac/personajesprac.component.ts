import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/series.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-personajesprac',
  templateUrl: './personajesprac.component.html',
  styleUrls: ['./personajesprac.component.css']
})
export class PersonajespracComponent implements OnInit {
  public idPer!: number;
  public personajes!: Array<any>;
  constructor(private _activeRoute: ActivatedRoute, private _service: ServiceSeries) { }

  ngOnInit(): void {
  
    this._activeRoute.params.subscribe((params: Params) => {
      //Entre corchetes el nombre del parametro que pusimos en routing
      if(params['id'] != null){
        this.idPer = parseInt(params['id']);
        this._service.getPersonajesById(this.idPer).subscribe(res => {
          this.personajes = res;
          console.log(this.personajes);
        });
      }
    });
  }

}
