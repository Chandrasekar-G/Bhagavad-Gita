import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider/data-provider.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {

  allChapters = [];
  constructor(
    private dataProviderService: DataProviderService
  ) { }

  ngOnInit() {
    this.getAllChapters();
  }

  getAllChapters = () => {
    this.allChapters = this.dataProviderService.getAllChapters();
  }
}
