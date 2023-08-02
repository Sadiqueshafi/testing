import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface SentEmail {
  to: string;
  subject: string;
  preview: string;
}


@Component({
  selector: 'app-sent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent {
  sentEmails: SentEmail[] = [
    {
      to: 'Alice Johnson',
      subject: 'Project Status Update',
      preview: 'Attached is the latest status report.'
    },
    {
      to: 'Bob Williams',
      subject: 'Thank You',
      preview: 'Thanks for your support!'
    },
    {
      to: 'Team AllStars',
      subject: 'Weekly Meeting Agenda',
      preview: 'Here\'s the agenda for our weekly meeting.'
    }
    // Add more dummy sent emails as needed
  ];

}
