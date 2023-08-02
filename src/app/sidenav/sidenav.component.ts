import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('slideFromLeft', [
      state('hidden', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', animate('300ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in'))
    ])
  ]

})
export class SidenavComponent {
  isCollapsed: boolean = true;

  toggleCollapse() {
    console.log('checking working',this.isCollapsed)
    this.isCollapsed = !this.isCollapsed;
  }
}
