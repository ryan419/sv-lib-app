import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateComponent>, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      author: [null, [Validators.required]],
      publishDate: [null, [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
