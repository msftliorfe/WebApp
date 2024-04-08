import { menuItems } from '@/shared/const';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule } from '@angular/router';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  navStart: Observable<NavigationEnd>;
  currentUrl: string='';

  constructor(router: Router) {
    // Create a new Observable that publishes only the NavigationStart event
    this.navStart = router.events.pipe(
      filter((evt: any) => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit() {
    this.navStart.subscribe((data:NavigationEnd) => this.currentUrl= data.url.substring(1));
  }

  menuItems:{name:string,url:string}[]=menuItems;  
}
