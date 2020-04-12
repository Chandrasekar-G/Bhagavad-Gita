import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'bg-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

  @Input() title;
  @Input() headerConfig;

  constructor(
    private location: Location
  ) { }

  ngOnInit() { }

  goBack = () => {
    this.location.back();
  }

}
