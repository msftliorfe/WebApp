import { Component } from '@angular/core';
import { NavigateComponent } from '@/shared/navigate/navigate.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigateComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  
})
export class HeaderComponent {

}
