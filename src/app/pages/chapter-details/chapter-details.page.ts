import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from 'src/app/services/data-provider/data-provider.service';

@Component({
  selector: 'app-chapter-details',
  templateUrl: './chapter-details.page.html',
  styleUrls: ['./chapter-details.page.scss'],
})
export class ChapterDetailsPage implements OnInit {

  chapterNumber = 1;
  allVerses = null;

  constructor(
    private route: ActivatedRoute,
    private dataProviderService: DataProviderService
  ) { }

  ngOnInit() {
    this.chapterNumber = parseInt(this.route.snapshot.params.chapterNumber, 10);
    this.getVerses();
  }

  getVerses = () => {
    this.allVerses = this.dataProviderService.getVerses(this.chapterNumber);
  }

}
