import { Component, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetComponent } from "../target/target.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TargetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('targetContainer') targetContainer!: ElementRef;
  private isScrolling = false;
  private lastScrollPosition = 0;

  ngAfterViewInit() {
    // Initial check for target position
    this.checkTargetPosition();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isScrolling) return;
    
    const currentScrollPosition = window.scrollY;
    const isScrollingDown = currentScrollPosition > this.lastScrollPosition;
    
    if (isScrollingDown) {
      this.checkTargetPosition();
    }
    
    this.lastScrollPosition = currentScrollPosition;
  }

  private checkTargetPosition() {
    const targetElement = this.targetContainer.nativeElement;
    const rect = targetElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const targetHeight = targetElement.offsetHeight;
    
    // Check if target is approximately half visible on screen
    if (rect.top < windowHeight * 0.75 && rect.top > windowHeight * 0.25) {
      this.isScrolling = true;
      
      // Calculate position to center the target
      const targetCenter = targetElement.offsetTop - (windowHeight - targetHeight + 65) / 2;
      
      window.scrollTo({
        top: targetCenter,
        behavior: 'smooth'
      });

      setTimeout(() => {
        this.isScrolling = false;
      }, 10000);
    }
  }
}
