import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider/data-provider.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoriteVerses;
  constructor(
    private dataProviderService: DataProviderService
  ) { }

  ngOnInit() {
    this.favoriteVerses = this.dataProviderService.getFavoriteVerses();
  }

}
