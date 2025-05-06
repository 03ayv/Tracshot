import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';
import { CommunityComponent } from './community/community.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DownloadComponent } from './download/download.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, NavbarComponent, FeaturesComponent, CommunityComponent, AboutUsComponent, DownloadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TracShot';
}
