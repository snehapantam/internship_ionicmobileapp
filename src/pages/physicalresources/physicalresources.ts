import {Component, ViewChild} from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, NavParams, Slides,} from 'ionic-angular';
import {Map} from "../map/map";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {AboutPage} from "../about/about";
import {DetailPage} from "../detail-page/detail-page";
import {UserData} from "../../providers/user-data"




/**
 * Generated class for the Physicalresources page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-physicalresources',
  templateUrl: 'physicalresources.html',
})
export class Physicalresources {
  [name: string]: any;
  http: Http;

  mapPage = Map;


  @ViewChild('mySlider')
  slider: Slides;
  selectedSegment: string;
  slides: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, httpService: Http,public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController,
  public service:UserData) {


    this.selectedSegment = navParams.get("thing1");

    this.slides = [
      {
        id: "resources",
        title: "First Slide"
      },
      {
        id: "workshops",
        title: "Second Slide"
      },
      {
        id: "tutorials",
        title: "Third Slide"
      },
      {
        id: "clubs",
        title: "Fourth Slide"
      },
      {
        id: "studentgoals",
        title: "Fifth Slide"
      }
    ];




    this.getData();

  }

getData()
{
  this.service.load().subscribe(data => {
    //var obj=data[0][1];
    //this.data=obj.name;


    var obj = data;
    this.datas = obj;


    console.log(obj);
  });
}
  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);

  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = currentSlide.id;
  }

  addtodo(name) {
    this.navCtrl.push(AboutPage, {
      thing1: name

    });

  }

  goToSessionDetail(Data: any) {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(DetailPage, {
      name: Data.name,
      contact: Data.contacts,
      phone:Data.phone,
      email:Data.email,
      data:Data
    });
  }



  addFavorite(sessionData: any) {

    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(sessionData, 'Favorite already added');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // create an alert instance
      let alert = this.alertCtrl.create({
        title: 'Favorite Added',


      });
      // now present the alert on top of all other content
      alert.present();
    }

  }
}

