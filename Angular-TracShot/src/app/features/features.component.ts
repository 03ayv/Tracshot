import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Advanced computer vision algorithms analyze your target in real-time, providing instant feedback on shot placement and grouping.',
      icon: '🎯'
    },
    {
      title: 'Progress Tracking',
      description: 'Track your improvement over time with detailed statistics, trends, and performance metrics that help identify areas for improvement.',
      icon: '📈'
    },
    {
      title: 'Smart Recommendations',
      description: 'Receive personalized tips and training recommendations based on your shooting patterns and performance data.',
      icon: '💡'
    },
    {
      title: 'Community Integration',
      description: 'Connect with fellow shooters, share achievements, and participate in challenges to enhance your training experience.',
      icon: '🤝'
    }
  ];
}
