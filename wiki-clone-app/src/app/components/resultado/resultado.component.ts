import { Component, Input, OnInit } from '@angular/core';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.less']
})
export class ResultadoComponent implements OnInit {
  @Input() getData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  clickboardCopy(data: any) {
    data.select();
    document.execCommand('copy');
    data.setSelecRange(0, 0);
  }


}
