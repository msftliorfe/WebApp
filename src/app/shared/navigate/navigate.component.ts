import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface RouteToParams{
  url:string;
  text:string;
  inner:boolean
}

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.scss'
})
export class NavigateComponent {
  @Input() routeToParams!:RouteToParams;

  constructor(private router: Router) {
    
  }


}
