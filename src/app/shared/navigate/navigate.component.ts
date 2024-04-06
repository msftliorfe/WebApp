import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.scss'
})
export class NavigateComponent {
  @Input() url!:string;
  @Input() text!:string;
  @Input() inner!:boolean;

  constructor(private router: Router) {
    
  }


}
