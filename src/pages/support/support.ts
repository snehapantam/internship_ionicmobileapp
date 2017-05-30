import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import { CallNumber } from '@ionic-native/call-number';


/**
 * Generated class for the Support page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class Support {

  submitted: boolean = false;
  supportMessage: string;
  phoneNumber:number;



  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,
              public alertCtrl: AlertController,
   private callNumber: CallNumber) {
   this.phoneNumber=9094874493;
  }

  submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      let toast = this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      toast.present();
    }
  }

call() {
  this.callNumber.callNumber(String(this.phoneNumber), true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Support');
  }


  ionViewCanLeave(): boolean | Promise<boolean> {
    // If the support message is empty we should just navigate
    if (!this.supportMessage || this.supportMessage.trim().length === 0) {
      return true;
    }
    return new Promise((resolve: any, reject: any) => {
      let alert = this.alertCtrl.create({
        title: 'Leave this page?',
        message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
      });
      alert.addButton({text: 'Stay', handler: reject});
      alert.addButton({text: 'Leave', role: 'cancel', handler: resolve});

      alert.present();
    });
  }

}
