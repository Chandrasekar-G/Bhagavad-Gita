import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bg-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {


  private _verse;
  showPlayer = false;
  url = '';

  @Input() set verse(verse) {
    this._verse = verse;
    this.showPlayer = false;
    this.constructURL();
  }

  constructor() { }

  ngOnInit() { }

  constructURL = () => {
    this.url = 'https://www.bhagavad-gita.org/AudioArchive/Gita/Sanskrit/verses/';
    this.url = this.url + this.formatNumber(this._verse.chapter_number) + '-' + this.formatNumber(this._verse.audio_number) + '.mp3';
    setTimeout(() => this.showPlayer = true);
  }

  formatNumber = (num) => {
    const formattedNumber = ('0' + num).slice(-2);
    return formattedNumber;
  }

}
