import { WikiService } from './../../services/wiki.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {debounceTime, tap} from 'rxjs/operators';
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
  constructor(private wikiService: WikiService) { }

  ngOnInit( ): void {
    this.onChange();
  }

  public onChange():void {
    this.inputSearch.valueChanges.pipe(
      debounceTime(2000),
      tap(res => this.setSearch.emit(res))
    ).subscribe();
  }



}
