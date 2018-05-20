import { Component, OnInit, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../shared/contact';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contactform: FormGroup;
  contact;
  errMess: string;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private contactsprovider: ContactsProvider,
    @Inject('BaseURL') private BaseURL ) {

      this.contactform = this.formBuilder.group({
        firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        phonenumber: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        email: ['', [Validators.required, Validators.email]],
        contact: ['', Validators.required],
        feedback: ['', Validators.required],
      });
    }

  reset() {
    this.contactform.reset();
  }

  onSubmit(){
    this.contact = this.contactform.value;
    console.log(this.contact);
    this.contactsprovider.postContact(this.contact)
      .subscribe(contacts => {console.log(contacts);},
        errmess => this.errMess = <any>errmess);
  }

}
