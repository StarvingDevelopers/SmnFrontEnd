import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ToastMessage, ToastService} from '../../services/toast.service';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'smn-toast',
  templateUrl: './toast.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  styleUrls: ['../../../sass/main.css']
})

export class ToastComponent implements OnInit {
  toastMessage: ToastMessage | null = null;
  private subscription!: Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.subscription = this.toastService.toastState.subscribe((toastMessage: any) => {
      this.toastMessage = toastMessage;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
