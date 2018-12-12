import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { Users } from '../../Models/Users.interface';
import{AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import{AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';

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
  user={} as Users;
  userref:FirebaseListObservable<Users[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private database:AngularFireDatabase ,private toastctrl:ToastController,public authctrl:AngularFireAuth) {
    this.userref=this.database.list('users');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(){
   this.userref.push(this.user);
    const toast=this.toastctrl.create({
      message: "  Welcome  " +this.user.UserName + ", you registerd succesfully  ",
      duration:3000,
      showCloseButton:true,
      closeButtonText:"ok"
   });
   this.authctrl.auth.createUserWithEmailAndPassword(this.user.UserEmail,this.user.Userpassword);
   this. user={} as Users;
   this.navCtrl.pop();
    toast.present();
  }

}
