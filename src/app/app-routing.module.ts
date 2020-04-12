import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chapters',
    pathMatch: 'full'
  },
  {
    path: 'chapters',
    loadChildren: () => import('./pages/chapters/chapters.module').then(m => m.ChaptersPageModule)
  },
  {
    path: 'chapter-details/:chapterNumber',
    loadChildren: () => import('./pages/chapter-details/chapter-details.module').then(m => m.ChapterDetailsPageModule)
  },
  {
    path: 'verse-detail/:chapterNumber/:verseNumber',
    loadChildren: () => import('./pages/verse-detail/verse-detail.module').then(m => m.VerseDetailPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./pages/progress/progress.module').then( m => m.ProgressPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
