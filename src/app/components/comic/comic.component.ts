import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic!: Comic;
  @Input() index!: number;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  @Output() eliminarComic: EventEmitter<any> = new EventEmitter();
  @Output() modificarComic: EventEmitter<any> = new EventEmitter();

  seleccionarFavoritoHijo(): void {
    this.seleccionarFavorito.emit(this.comic);
  }

  eliminarComicHijo(): void {
    console.log(this.index);
    this.eliminarComic.emit(this.index);
  }

  modificarComicHijo(): void {
    this.modificarComic.emit(this.index);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
