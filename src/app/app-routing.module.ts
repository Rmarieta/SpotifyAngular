import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
