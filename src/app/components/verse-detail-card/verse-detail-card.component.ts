import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'bg-verse-detail-card',
  templateUrl: './verse-detail-card.component.html',
  styleUrls: ['./verse-detail-card.component.scss'],
})
export class VerseDetailCardComponent implements OnInit {

  _verse;
  isFavorite = false;
  favoriteText = 'Mark as Favorite';
  completeText = 'Mark as Complete';
  isComplete = false;
  get verse() {
    return this._verse;
  }
  @Input('verse')
  set verse(value) {
    if (value && value.word_meanings) {
      this._verse = value;
      if (typeof this._verse.word_meanings === 'string') {
        this._verse.word_meanings = this._verse.word_meanings.split(';').map(pair => {
          return pair.split('—');
        });
      }
    }
  }
  @Input() chapter;

  constructor(private toastController: ToastController) {
  }

  ngOnInit() { }

  toggleFavorite = () => {
    this.isFavorite = !this.isFavorite;
    const toastMessage = this.isFavorite ? 'Added to your favorites' : 'Removed from your favorites';
    this.presentToast(toastMessage);
  }

  toggleComplete = () => {
    this.isComplete = !this.isComplete;
    const toastMessage = this.isComplete ? 'Marked as complete' : 'Marked as incomplete';
    this.presentToast(toastMessage);
  }


  presentToast = async (message) => {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
