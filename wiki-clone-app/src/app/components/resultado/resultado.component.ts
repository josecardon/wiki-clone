import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.less']
})
export class ResultadoComponent implements OnInit {
  @Input() query: string;

  constructor() { }

  ngOnInit(): void {
    console.warn('===>' , this.query);
  }

}
