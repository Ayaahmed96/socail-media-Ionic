import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Person } from '../../Models/Person.interface';
import{AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import{AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user={} as Person;
  userref:FirebaseListObservable<Person[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private database:AngularFireDatabase ,public authctrl:AngularFireAuth) {
    this.userref=this.database.list('Persons');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    if(this.authctrl.auth.signInWithEmailAndPassword(this.user.UserEmail,this.user.Userpassword)){
      console.log(" email is :" + this.user.UserEmail +" and the password is "+this.user.Userpassword);
      this.navCtrl.push('UserInfoPage');
    }
   else{

   }
  }
 
}
