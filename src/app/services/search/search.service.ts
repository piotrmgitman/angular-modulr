import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private searchphrase = null;

  constructor(private http: Http) { }

  getByQuery() {
    return this.http.get(`http://localhost:3000/v1/api/show/query/${this.searchphrase}`)
      .map(res => res.json());
  }

  getAll() {
    return this.http.get('http://localhost:3000/v1/api/show/all')
      .map(res => res.json());
  }

  getEmpty() {
    return this.http.get('http://localhost:3000/v1/api/show/query/')
    .map(res => res.json());
  }

  updateSearch(searchphrase:string) {
    this.searchphrase = searchphrase;
  }

}
