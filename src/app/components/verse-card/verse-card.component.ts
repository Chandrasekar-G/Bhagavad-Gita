import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bg-verse-card',
  templateUrl: './verse-card.component.html',
  styleUrls: ['./verse-card.component.scss'],
})
export class VerseCardComponent implements OnInit {

  @Input() verse;
  @Input() showChapterNo;
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  goToVerse = () => {
    this.router.navigate(['verse-detail/' + this.verse.chapter_number + '/' + this.verse.verse_number]);
  }

}
