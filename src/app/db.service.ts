import { Injectable } from '@angular/core'
import { IEmailData } from './data.model'
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore'

@Injectable({providedIn: 'root'})
export class DatabaseService {

  constructor(private db: AngularFirestore) {}
  
  public insertData(emailData: IEmailData): Promise<DocumentReference<unknown>> {
    try {
      return this.db.collection('emailData').add({
        ...emailData,
        createdDate: new Date().toISOString()
      })
    } catch (error) {
      return Promise.reject({
        error: 'An error occurred while trying to insert data',
      })
    }
  }
}