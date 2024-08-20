import {Component, OnInit} from '@angular/core';
import {ColorPickerComponent} from "../smn-color-picker/color-picker.component";
import {NgIf} from "@angular/common";
import {GroupModalVisibilityService} from "../../services/group-modal-visibility.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'smn-group-modal',
  templateUrl: './group-modal.component.html',
  standalone: true,
  imports: [
    ColorPickerComponent,
    NgIf,
    ReactiveFormsModule
  ],
  styleUrls: ['../../../sass/main.css']
})

export class GroupModalComponent implements OnInit {

  isVisible: boolean = false;
  groupForm: FormGroup;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private visibilityService: GroupModalVisibilityService, private fb: FormBuilder) {
    this.groupForm = this.fb.group({
      photo: [null],
      name: [''],
      description: [''],
      color: ['']
    });
  }

  ngOnInit(): void {
    this.visibilityService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    })
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    console.log(this.groupForm.value);
  }
}
