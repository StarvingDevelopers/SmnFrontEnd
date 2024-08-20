import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../services/search.service';
import {NgForOf, NgIf} from "@angular/common"; // Supondo que você tenha um serviço para fazer a requisição

@Component({
  selector: 'search',
  templateUrl: '../pages/search/search.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  styleUrls: ['../../sass/main.css']
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  searchResults: any[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Espera 300ms após o usuário parar de digitar
        distinctUntilChanged() // Evita requisições desnecessárias se o valor não mudou
      )
      .subscribe(query => {
        if (query) {
          this.searchService.search(query).subscribe(results => {
            this.searchResults = results;
          });
        } else {
          this.searchResults = [];
        }
      });
  }
}
