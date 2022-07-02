import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'wiki-clone-app';
  public search!: string;

  getSearch(res: any) {
    this.search = res;
  }
}
