import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../services/search.service';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ToastService} from "../../core/services/toast.service";
import {CardComponent} from "../../core/components/smn-card/card.component";

@Component({
  selector: 'search',
  templateUrl: '../pages/search/search.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    CardComponent,
    NgOptimizedImage
  ],
  styleUrls: ['../../sass/main.css']
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  searchResults: any[] = [];
  groups: Array<any> = [];
  users: Array<any> = [];

  constructor(private searchService: SearchService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(50),
        distinctUntilChanged()
      )
      .subscribe(query => {
        if (query) {
          this.searchService.search(query).subscribe(results => {
            this.searchResults.push(results)
            this.groups = this.searchResults[0].groups
            this.users = this.searchResults[0].users
          });
        } else {
          this.searchResults = [];
          this.showError('A pesquisa nao retornou nada')
        }
      });
  }

  showError(message: string) {
    this.toastService.showToast(message, 'error');
  }

  showSuccess(message: string) {
    this.toastService.showToast(message, 'success');
  }
}
