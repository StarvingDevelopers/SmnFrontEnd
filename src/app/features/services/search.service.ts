import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private dataService: DataService) { }

  search(query: string): Observable<any[]> {
    return this.dataService.postData(query, '/search')
  }
}
