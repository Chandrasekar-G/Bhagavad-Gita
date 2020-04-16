import { Component, OnInit, Input } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'bg-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {


  @Input() verse;
  url = 'https://www.bhagavad-gita.org/AudioArchive/Gita/Sanskrit/verses/';
  constructor(private nativeAudio: NativeAudio) {
  }

  ngOnInit() {
    this.constructURL();

  }

  constructURL = () => {
    this.url = this.url + this.formatNumber(this.verse.chapter_number) + '-' + this.formatNumber(this.verse.audio_number) + '.mp3';
  }

  formatNumber = (num) => {
    const formattedNumber = ('0' + num).slice(-2);
    return formattedNumber;
  }

}
