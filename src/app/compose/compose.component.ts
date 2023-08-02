import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent {
  recipientEmail: string = '';
  emailSubject: string = '';
  emailContent: string = '';
  sendEmail() {
    console.log('Sending email...');
    console.log('Recipient:', this.recipientEmail);
    console.log('Subject:', this.emailSubject);
    console.log('Content:', this.emailContent);
  }
}
