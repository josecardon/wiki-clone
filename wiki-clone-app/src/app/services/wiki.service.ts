import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export interface IWiki {
  query: {
    search: IArticle[]
  }
}

export interface IArticle {
  ns: number;
  title?: string;
  padeid?: string;
  size?: number;
  wordcount?: number;
  snippet?: string;
  timestamp?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }


  public search(term: string): Observable<IArticle[] | any | IArticle> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
      utf8: '1',
      origin: '*'
    }
    return this.http.get<IWiki[] | any | IWiki>(`${environment.END_POINT}`, {params: params}).
    pipe(
      //Sirve para filtrar por las propiedades que trae un json
      pluck('query', 'search')
    );
  }
}
