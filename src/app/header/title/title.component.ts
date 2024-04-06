import { NavigateComponent } from '@/shared/navigate/navigate.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [NavigateComponent],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

}
