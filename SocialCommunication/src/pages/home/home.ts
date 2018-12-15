import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import{AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { Posts } from '../../Models/Posts.interface';
import { Person } from '../../Models/Person.interface';



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userref:FirebaseObjectObservable<Person>;
  myuser={} as Person;
  follwers:string;
 folllowers_array :string[];
 counter:any;
 followers_array_int:Number[];
 returned_followers_array:string[];
 postref:FirebaseListObservable<Posts[]>;
 postslist:Posts[];
 x:any;
 array_posts:any;
 usersrefrence:FirebaseListObservable<Person[]>;
 userslist:Person[];
 thefollowerskeys:string;
 counter2:any;
 finlarraypost:Posts[];
length1:Number;

//userx={} as Users;
 userx :any;
 xkey :string;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private database:AngularFireDatabase ,public authctrl:AngularFireAuth) {
   this.getallposts();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  getallposts(){
    this.finlarraypost=[];
    var userId = this.authctrl.auth.currentUser.uid;
    this.usersrefrence=this.database.list('Persons');
   
     this.usersrefrence.subscribe((items)=>{
      this.userslist=items;
     // console.log(this.userslist.length);
   //this.length1=this.userslist.length;
   for(this.counter=0;this.counter<this.userslist.length;this.counter++){
    if(userId==this.userslist[this.counter].UserID){
      this.myuser=this.userslist[this.counter];
    //  console.log(this.myuser.UserName);
    } }
   this.thefollowerskeys =this.myuser.FollowesKeys;
  // console.log(this.myuser.FollowesKeys);
   this.folllowers_array=this.thefollowerskeys.split(",");
  // console.log(this.folllowers_array[0]);
  // console.log(this.folllowers_array[1]);
  // console.log(this.folllowers_array[2]);

   // now retrive all posts
   this.postref=this.database.list('Posts');
   this.postref.subscribe((items)=>{
     this.postslist=items;
// console.log("1");
    for(this.counter=0;this.counter<this.postslist.length;this.counter++){
    //  console.log("2");
      for(this.counter2=0;this.counter2<this.folllowers_array.length;this.counter2++){
        //console.log("3");
        if(this.postslist[this.counter].UserID==this.folllowers_array[this.counter2]){
        this.finlarraypost.push(this.postslist[this.counter]);
         console.log(this.postslist[this.counter].PostText);
        }
      }

    }
   // console.log("4");
  });

     });
 
   
 /* for(this.counter=0;this.counter<this.userslist.length;this.counter++){
    if(userId==this.userslist[this.counter].UserID){
      this.myuser=this.userslist[this.counter];
    } }
   this.thefollowerskeys =this.myuser.FollowesKeys;
   this.folllowers_array=this.thefollowerskeys.split(",");
   // now retrive all posts
   this.postref=this.database.list('Posts');
   this.postref.subscribe((items)=>{
     this.postslist=items;
    });
    for(this.counter=0;this.counter<this.postslist.length;this.counter++){
      for(this.counter2=0;this.counter2<this.folllowers_array;this.counter2++){
        if(this.postslist[this.counter].UserID==this.folllowers_array[this.counter2]){
         this.finlarraypost.push(this.postslist[this.counter]);
         console.log(this.postslist[this.counter].PostText);
        }
      }

    }
   */  
  return this.finlarraypost;
  }

  /* listoffriends(){
   //userId :string  =>parameter

   var userId = this.authctrl.auth.currentUser.uid;
   const ref = this.database.database.ref("https://socialapp-ca2eb.firebaseio.com/");
 this.userx =ref.child('Users').orderByChild('UserID').equalTo(userId).once('value')
 .then(snapshot => {
   snapshot.forEach(function(child) {
     console.log(child.key);
   });
 })


  // this.xkey=this.userx.$key;
  //  this.userref=this.database.object('Users/'+ this.xkey);
  
  
  //this.myuser=this.userx;
 




 /* this.database.database.ref('Users').orderByChild('UserID').equalTo(userId)
  .once('value')
  .then(snapshot => {
    snapshot.forEach(function(child) {
      console.log(child.key);
    });
  })
  */

  /*  this.userx.subscribe((x)=>{
      this.myuser=x;
    });
    */

              //  this.follwers=this.myuser.FollowesKeys;
               //  this.folllowers_array=this.follwers.split(",");
 // this.folllowers_array="uR53VTyQhsgr1Ae7E2hv3AHYU533,n8Zer1mx85aUgdf9yVWQMXNImu23".split(",");
  //console.log(this.folllowers_array[0]);
  //console.log(this.folllowers_array[1]);
 // console.log( this.myuser.UserName);

    /*for(this.counter=0;this.counter<=this.folllowers_array.length;this.counter++){
      this.followers_array_int[this.counter]= Number(this.folllowers_array[this.counter]);
    }
    */
  //    return this.folllowers_array;
  
 // } */
  
 /* viewlistoffriends(){
    var userId = this.authctrl.auth.currentUser.uid;
    const ref = this.database.database.ref("Posts");
    //this.returned_followers_array =this.listoffriends(userId);
     for(this.counter=0;this.counter<=this.returned_followers_array.length;this.counter++){
     this.array_posts.push(ref.child('Posts').orderByChild('UsersKeys').equalTo(this.returned_followers_array[this.counter]));
     }
     for(this.counter=0;this.counter<=this.array_posts.length;this.counter++){
     this.postslist[this.counter]=this.array_posts[this.counter];
     }
  return this.array_posts;
 // console.log(this.array_posts)
  }
  */
  Gotosignup(){
    this.navCtrl.push('SignupPage');
  }
  Gotologin(){
    this.navCtrl.push('LoginPage');
  }

  }

 
  

