import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/series.service';
import { Serie } from 'src/app/models/serie';


@Component({
  selector: 'app-seriesprac',
  templateUrl: './seriesprac.component.html',
  styleUrls: ['./seriesprac.component.css']
})
export class SeriespracComponent implements OnInit {
  public series!: Array<Serie>;
  constructor(private _service: ServiceSeries) { }

  ngOnInit(): void {
    this.cargarSeries();
  }

  cargarSeries():void{
 
    this._service.getSeries().subscribe(res => {
      this.series = res;
      console.log(this.series);
    });
    
  }
}
