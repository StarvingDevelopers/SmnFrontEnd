import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GroupModalVisibilityService {
  private isVisible = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisible.asObservable();

  setValue(value: boolean) {
    this.isVisible.next(value);
  }
}
