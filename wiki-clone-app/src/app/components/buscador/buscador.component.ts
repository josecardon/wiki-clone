import { WikiService } from './../../services/wiki.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, map, tap} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.less']
})
export class BuscadorComponent implements OnInit {


  public selectedVoice: string;
  public inputSearch: FormControl = new FormControl();
  @Output() setSearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit( ): void {
    this.onChange();
  }

  public onChange():void {
    this.inputSearch.valueChanges.pipe(
      map((search) => search.trim()),
      debounceTime(2000),
      //Metodo para no repetir la busqueda si ya existe una busqueda en curso
      distinctUntilChanged(),
      filter((search) => search !== ''),
      tap(res => this.setSearch.emit(res))
    ).subscribe();
  }





}
