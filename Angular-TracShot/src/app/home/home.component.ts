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
    
    // If target is partially visible or just below viewport
    if (rect.top > windowHeight * 0.3 && rect.top < windowHeight * 1.5) {
      this.isScrolling = true;
      
      // Calculate position to center the target
      const targetCenter = targetElement.offsetTop - (windowHeight - targetElement.offsetHeight + 65) / 2;
      
      window.scrollTo({
        top: targetCenter,
        behavior: 'smooth'
      });

      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }
}
