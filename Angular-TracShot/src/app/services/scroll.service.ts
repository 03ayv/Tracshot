import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private currentSection = new BehaviorSubject<string>('home');
  currentSection$ = this.currentSection.asObservable();

  setCurrentSection(section: string) {
    this.currentSection.next(section);
  }
} 