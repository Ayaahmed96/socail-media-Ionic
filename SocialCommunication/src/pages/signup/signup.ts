import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import{AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import{AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { Person } from '../../Models/Person.interface';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user={} as Person;
  userref:FirebaseListObservable<Person[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private database:AngularFireDatabase ,private toastctrl:ToastController,public authctrl:AngularFireAuth) {
    this.userref=this.database.list('Persons');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(){
    this.authctrl.auth.createUserWithEmailAndPassword(this.user.UserEmail,this.user.Userpassword);
    const toast=this.toastctrl.create({
     message: "  Welcome  " +this.user.UserName + ", you registerd succesfully  ",
     duration:3000,
     showCloseButton:true,
     closeButtonText:"ok"
  });
    this.navCtrl.push('LoginPage');
     toast.present();
   }
   /*logout(){
     this.authctrl.auth.currentUser.
   }
*/

}
