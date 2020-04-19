import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';

@Component({
  selector: 'bg-verse-detail-card',
  templateUrl: './verse-detail-card.component.html',
  styleUrls: ['./verse-detail-card.component.scss'],
})
export class VerseDetailCardComponent implements OnInit {

  _verse;
  isFavorite = false;
  isComplete = false;
  get verse() {
    return this._verse;
  }
  @Input('verse')
  set verse(value) {
    if (value && value.word_meanings) {
      this._verse = value;
      this.getVerseStatus();
      if (typeof this._verse.word_meanings === 'string') {
        this._verse.word_meanings = this._verse.word_meanings.split(';').map(pair => {
          return pair.split('—');
        });
      }
    }
  }
  @Input() chapter;

  constructor(
    private toastController: ToastController,
    private userInfoService: UserInfoService
  ) {
  }

  ngOnInit() { }

  getVerseStatus = () => {
    this.isFavorite = this.userInfoService.checkIfFavorite(this.verse.verse_id);
    this.isComplete = this.userInfoService.checkIfComplete(this.verse.verse_id);
  }

  toggleFavorite = () => {
    this.isFavorite = !this.isFavorite;
    const toastMessage = this.isFavorite ? 'Added to your favorites' : 'Removed from your favorites';
    if (this.isFavorite) {
      this.userInfoService.markAsFavorite(this.verse.verse_id);
    } else {
      this.userInfoService.removeFromFavorites(this.verse.verse_id);
    }
    this.presentToast(toastMessage);
  }

  toggleComplete = () => {
    this.isComplete = !this.isComplete;
    const toastMessage = this.isComplete ? 'Marked as complete' : 'Marked as incomplete';
    if (this.isComplete) {
      this.userInfoService.markAsComplete(this.verse.verse_id);
    } else {
      this.userInfoService.removeFromComplete(this.verse.verse_id);
    }
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
