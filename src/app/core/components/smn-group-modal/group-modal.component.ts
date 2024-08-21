import {Component, OnInit} from '@angular/core';
import {ColorPickerComponent} from "../smn-color-picker/color-picker.component";
import {NgIf} from "@angular/common";
import {GroupModalVisibilityService} from "../../services/group-modal-visibility.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DataService} from "../../../features/services/data.service";

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
  imagePath: undefined;
  userAccount = JSON.parse(localStorage.getItem("userAccount")!)
  isVisible: boolean = false;
  groupForm: FormGroup;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private visibilityService: GroupModalVisibilityService, private fb: FormBuilder, private dataService: DataService) {
    const colors = ['#C74D5C', '#7F7EDF', '#ECD06B', '#85A97D'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    this.groupForm = this.fb.group({
      profileImage: [null],
      name: [''],
      ownerName: this.userAccount.username,
      description: [''],
      baseColor: randomColor
    });
  }

  ngOnInit(): void {
    this.visibilityService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    })
  }

  pictureUploaded(event: any) {
    const files = event.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.selectedImage = reader.result!;
    }
  }

  onSubmit(): void {
    console.log(this.groupForm.value);

    this.dataService.postData(this.groupForm.value, 'group/create').subscribe()

  }
}
