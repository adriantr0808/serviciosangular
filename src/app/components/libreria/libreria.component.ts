import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})


export class LibreriaComponent implements OnInit {
  public comics!: Array<Comic>;
  public fav!: Comic;
  @ViewChild('cajatitulo') cajatitulo: ElementRef;
  @ViewChild('cajaimagen') cajaimagen: ElementRef;
  @ViewChild('cajadesc') cajadesc: ElementRef;





  constructor(private _servicecomics: ComicsService) {

    this.cajatitulo = new ElementRef('');
    this.cajaimagen = new ElementRef('');
    this.cajadesc = new ElementRef('');
  }

  ngOnInit(): void {
    this.comics = this._servicecomics.getComics();
  }


  agregarComic(): void {
    var tit = this.cajatitulo.nativeElement.value;
    var img = this.cajaimagen.nativeElement.value;
    var desc = this.cajadesc.nativeElement.value;
    var comic = new Comic(tit, img, desc);
    this.comics.push(comic);
  }

  seleccionarFavoritoParent(event: Comic): void {
    this.fav = event;

  }

  eliminarComicParent(event: number): void {
    this.comics.splice(event, 1);
  }

  modificarComicParent(event: number): void {
    var tit = this.cajatitulo.nativeElement.value;
    var img = this.cajaimagen.nativeElement.value;
    var desc = this.cajadesc.nativeElement.value;

    var comic = this.comics[event];
    comic.titulo = tit;
    comic.imagen = img;
    comic.descripcion = desc;
  }

  //Es mejor de la siguiente forma para que lo que se envie sea un Comic y no cualquier cosa
  //this.comics[event] = new Comic (titulo, imagen, descripcion);

}
