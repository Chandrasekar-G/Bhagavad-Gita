import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bg-verse-detail-card',
  templateUrl: './verse-detail-card.component.html',
  styleUrls: ['./verse-detail-card.component.scss'],
})
export class VerseDetailCardComponent implements OnInit {

  _verse;
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

  constructor() {
    // this.verse = this.verse.word_meanings.split(';').join(';\n');
  }

  ngOnInit() { }

}
