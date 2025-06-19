import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() { }

  sendEmail(subject: string, body: string) {
    console.log(subject, body)
  }
}