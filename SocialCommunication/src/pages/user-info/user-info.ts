import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { Person } from '../../Models/Person.interface';
import{AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import{AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  user={} as Person;
  userref:FirebaseListObservable<Person[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase ,private toastctrl:ToastController,public authctrl:AngularFireAuth) {
   
   
    this.userref=this.database.list('Persons');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }

userInfo(){
  var userId = this.authctrl.auth.currentUser.uid;
  this.user.UserID=userId;
  this.user.FollowesKeys="9OhDAze6EnRMWAzA4eN2ZFmhVl83,qO4RimJfSNX9isb2EsTfEInnpq72,OoGnxAhTZUUY2U6hoGPUeSf2KAG2";
  this.userref.push(this.user);
  this. user={} as Person;
  
  const toast=this.toastctrl.create({
    message: "  your info added   ",
    duration:3000,
    showCloseButton:true,
    closeButtonText:"ok"
 });
 this.navCtrl.push('AddPostPage');
 toast.present();
}




}
