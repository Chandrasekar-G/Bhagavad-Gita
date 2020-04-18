import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { DataProviderService } from 'src/app/services/data-provider/data-provider.service';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  allChapters = [];
  progressDetails = [];
  total = {
    finished: 0,
    remaining: 0
  };
  completedVerses = [];

  public doughnutChartLabels: Label[] = ['Remaining', 'Completed'];
  public doughnutChartData: MultiDataSet = [
    [0, 0]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#FF4081', '#1DE9B6']
    }
  ];

  constructor(
    private dataProviderService: DataProviderService,
    private userInfoService: UserInfoService
  ) {
  }

  ngOnInit() {
    this.getAllData();
    this.getProgress();
  }

  getAllData = () => {
    this.allChapters = this.dataProviderService.getAllChapters();
    this.completedVerses = this.userInfoService.userData.completed;
  }

  getProgress = () => {
    this.total.finished = 0;
    this.total.remaining = 0;

    this.progressDetails = this.allChapters.map(chapter => {
      const obj = {
        chapter_name: chapter.name_translation,
        total_verses: chapter.verses_count,
        completed_verses: []
      };
      const completedVerses = [];
      for (let i = chapter.first_verse; i <= chapter.first_verse + chapter.verses_count; i++) {
        if (this.completedVerses.includes(i)) {
          completedVerses.push(i);
          this.total.finished++;
        } else {
          this.total.remaining++;
        }
      }
      obj.completed_verses = completedVerses;
      return obj;
    });
    this.doughnutChartData.pop();
    this.doughnutChartData.push([this.total.remaining, this.total.finished]);
  }

}
