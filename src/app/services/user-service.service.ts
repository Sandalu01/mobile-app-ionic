import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private firestore: AngularFirestore, private firebaseauth: AngularFireAuth) { }

  //fire- base -authentification
  Register(email:string,password:string):Promise<any> {
    return this.firebaseauth.createUserWithEmailAndPassword(
      email,password)
  }

  login(email:string,password:string):Promise<any> {
    return this.firebaseauth.signInWithEmailAndPassword(
      email,password)
  }

  //save the data in the firestore

  createuser(email:string,name:string):Promise<any> {
    return this.firestore.collection('users').add({
      email:email,
      name:name,
    })

  }
}
