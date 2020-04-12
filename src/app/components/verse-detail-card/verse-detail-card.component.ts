import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bg-verse-detail-card',
  templateUrl: './verse-detail-card.component.html',
  styleUrls: ['./verse-detail-card.component.scss'],
})
export class VerseDetailCardComponent implements OnInit {

  @Input() verse;
  constructor() { }

  ngOnInit() {}

}
