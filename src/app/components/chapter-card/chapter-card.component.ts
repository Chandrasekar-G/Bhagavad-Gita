import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bg-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.scss'],
})
export class ChapterCardComponent implements OnInit {

  @Input() chapter;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  goToChapter = () => {
    this.router.navigate(['chapter-details/' + this.chapter.chapter_number]);
};

}
