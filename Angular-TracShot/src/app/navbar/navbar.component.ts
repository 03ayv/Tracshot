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
  isScrolling = false;
  scrollTimeout: any;

  constructor(private scrollService: ScrollService) {
    this.scrollService.currentSection$.subscribe(
      section => this.currentSection = section
    );
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.isScrolling) return;
    
    const homeSection = document.getElementById('home');
    const featuresSection = document.getElementById('features');
    const communitySection = document.getElementById('community');
    const aboutSection = document.getElementById('about');
    
    if (!homeSection || !featuresSection || !communitySection || !aboutSection) return;

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    if (scrollPosition < featuresSection.offsetTop) {
      this.scrollService.setCurrentSection('home');
    } else if (scrollPosition < communitySection.offsetTop) {
      this.scrollService.setCurrentSection('features');
    } else if (scrollPosition < aboutSection.offsetTop) {
      this.scrollService.setCurrentSection('community');
    } else {
      this.scrollService.setCurrentSection('about');
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      this.isScrolling = true;
      this.scrollService.setCurrentSection(sectionId);
      
      const offset = 70;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

      // Clear any existing timeout
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      // Set a new timeout
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
      }, 1000); // Adjust timing if needed
    }
  }
}
