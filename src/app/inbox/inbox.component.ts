import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Email {
  from: string;
  subject: string;
  preview: string;
}
@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  emails:Email[] = [
    {
      from: 'John Doe',
      subject: 'Meeting Tomorrow',
      preview: "Hi, let's discuss the upcoming meeting.",
    },
    {
      from: 'Jane Smith',
      subject: 'Weekend Plans',
      preview: 'Hey, any plans for the weekend?',
    },
    {
      from: 'Company X',
      subject: 'Exclusive Offer',
      preview: 'Get 20% off on all products this week.',
    },
    // Add more sample emails as needed
  ];
}
