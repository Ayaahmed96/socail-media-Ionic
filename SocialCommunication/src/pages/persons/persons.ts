import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../Models/Person.interface';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';

/**
 * Generated class for the PersonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-persons',
  templateUrl: 'persons.html',
})
export class PersonsPage {
  personref:FirebaseListObservable<Person[]>;
  personlist:Person[];
  constructor(public navCtrl: NavController, public navParams: NavParams ,private database:AngularFireDatabase) {
    this.personref=this.database.list('Persons');
    this.personref.subscribe((items)=>{
      this.personlist=items;

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonsPage');
  }

}
