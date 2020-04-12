import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from 'src/app/services/data-provider/data-provider.service';

@Component({
  selector: 'app-verse-detail',
  templateUrl: './verse-detail.page.html',
  styleUrls: ['./verse-detail.page.scss'],
})
export class VerseDetailPage implements OnInit {

  verse = null;
  chapterNumber = 1;
  verseNumber = 1;

  constructor(
    private route: ActivatedRoute,
    private dataProviderService: DataProviderService
  ) { }

  ngOnInit() {
    this.chapterNumber = parseInt(this.route.snapshot.params.chapterNumber, 10);
    this.verseNumber = parseInt(this.route.snapshot.params.verseNumber, 10);
    this.getVerse();
  }

  getVerse = () => {
    this.verse = this.dataProviderService.getVerse(this.chapterNumber, this.verseNumber);
    console.log(this.verse);
  }

}
