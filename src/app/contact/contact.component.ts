import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../db.service';
import { SuccessComponent } from "../success/success.component";
import emailjs from '@emailjs/browser'
import { EmailService } from '../email.service';
import { environment } from '../../environments/environment';

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

  constructor(
    private db: DatabaseService,
    private emailService: EmailService
  ) {
    emailjs.init(environment.emailjs.publicKey)
  }

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

  async onSubmit(): Promise<void> {
    this.submitted = true
    this.loading = true
    if (this.emailDataForm.invalid) {
      this.loading = false
      return
    }
    // Send email to myself
    try {
      const email = this.emailDataForm.value.email
      const name = this.emailDataForm.value.name
      const message = this.emailDataForm.value.message
      const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
      const subject = 'Portfolio Contact Form Submission'

      const templateParams = {
        name,
        email_from: 'strangermushwana@gmail.com',
        message: emailBody,
        subject,
        to_email: 'strangermushwana@gmail.com'
      }

      console.log(templateParams)
  
      await emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, templateParams)
      this.db.insertData(this.emailDataForm.value).then((res) => {
        this.showSuccess = true
        this.emailDataForm.reset()
      })
    } catch (error) {

      console.log(error)
      this.loading = false
      this.submitted = false
      this.db.insertData(this.emailDataForm.value).then((res) => {
        this.showSuccess = true
        this.emailDataForm.reset()
      })
    }
  }

  get form() {
    return this.emailDataForm.controls
  }

}
