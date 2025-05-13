import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetComponent } from "../target/target.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TargetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
