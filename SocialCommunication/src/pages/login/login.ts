import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { Users } from '../../Models/Users.interface';
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
  user={} as Users;
  userref:FirebaseListObservable<Users[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private database:AngularFireDatabase ,public authctrl:AngularFireAuth ,private toastctrl:ToastController) {
    this.userref=this.database.list('users');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    if(this.authctrl.auth.signInWithEmailAndPassword(this.user.UserEmail,this.user.Userpassword)){
      console.log(" email is :" + this.user.UserEmail +" and the password is "+this.user.Userpassword);
      const toast=this.toastctrl.create({
        message: "  Welcome  " +this.user.UserEmail + ", you registerd succesfully  ",
        duration:3000,
        showCloseButton:true,
        closeButtonText:"ok"
     });
      this.navCtrl.pop();
      toast.present();
    }
    else{
      const toast=this.toastctrl.create({
        message: " Incorrect username or password  ",
        duration:3000,
        showCloseButton:true,
        closeButtonText:"ok"
     });
     this.navCtrl.pop();
     toast.present();
    }
  
  }
}
