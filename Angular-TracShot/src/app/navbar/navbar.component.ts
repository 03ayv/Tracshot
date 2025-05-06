import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentSection = 'home';

  constructor(private scrollService: ScrollService) {
    this.scrollService.currentSection$.subscribe(
      section => this.currentSection = section
    );
  }

  @HostListener('window:scroll')
  onScroll() {
    const homeSection = document.getElementById('home');
    const featuresSection = document.getElementById('features');
    
    if (!homeSection || !featuresSection) return;

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    if (scrollPosition < featuresSection.offsetTop) {
      this.scrollService.setCurrentSection('home');
    } else {
      this.scrollService.setCurrentSection('features');
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70; // Navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      this.scrollService.setCurrentSection(sectionId);
    }
  }
}
