import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../db.service';
import { SuccessComponent } from "../success/success.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [ReactiveFormsModule, CommonModule, SuccessComponent]
})
export class ContactComponent implements OnInit {
  emailDataForm: any
  submitted: boolean = false
  showSuccess: boolean = false
  loading: boolean = false

  constructor(private db: DatabaseService) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.emailDataForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(): void {
    this.submitted = true
    this.loading = true
    if (this.emailDataForm.invalid) {
      this.loading = false
      return
    }
    this.db.insertData(this.emailDataForm.value).then((res) => {
      this.showSuccess = true
      this.emailDataForm.reset()
    })
  }

  get form() {
    return this.emailDataForm.controls
  }

}
