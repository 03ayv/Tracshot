import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {
  plans = [
    {
      name: 'Free',
      price: '€0',
      features: [
        'Basic target analysis',
        'Score calculation',
        'Shot grouping visualization',
        'Basic progress tracking'
      ]
    },
    {
      name: 'Premium',
      price: '€9.99/month',
      features: [
        'Advanced target analysis',
        'Detailed performance metrics',
        'Training recommendations',
        'Cloud storage',
        'Priority support'
      ]
    },
    {
      name: 'VIP',
      price: '€14.99/month',
      features: [
        'All Premium features',
        'Custom training programs',
        'Video analysis',
        'Personal coaching sessions',
        'Early access to new features',
        'Exclusive community events'
      ]
    }
  ];
}
