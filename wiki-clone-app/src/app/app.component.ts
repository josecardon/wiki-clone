import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WikiService } from './services/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'wiki-clone-app';
  public data: any[] = [];

  getSearch(res: any) {
    this.wikiService.search(res).subscribe(res => {
        console.log(res);

        this.data = res;
    });

  }
  constructor(private wikiService: WikiService) { }
}
