import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import{AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { Posts } from '../../Models/Posts.interface';



@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {

  myproduct={} as Posts;
  productref:FirebaseListObservable<Posts[]>;
  postslist:Posts[];
  constructor(public navCtrl: NavController, public navParams: NavParams ,public authctrl:AngularFireAuth ,private database:AngularFireDatabase){
    this.productref=this.database.list('Posts');
  }
  

  AddItem()
  {
    var userId = this.authctrl.auth.currentUser.uid;
    this.myproduct.UserID=userId;
    this.productref.push(this.myproduct);
    this.myproduct={} as Posts;
    this.navCtrl.push('LoginPage');

  }

}
