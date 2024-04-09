import { Component } from '@angular/core';
import { TitleComponent } from '@/header/title/title.component';
import { NavComponent } from '@/header/nav/nav.component';
import { SocialComponent } from '@/header/social/social.component';
import { LangComponent } from '@/header/lang/lang.component';
import { CommonModule } from '@angular/common';
import { menuItems } from '@/shared/const';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleComponent,NavComponent,SocialComponent,LangComponent,CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  
})
export class HeaderComponent {
  menuItems:{name:string,url:string}[]=menuItems;  

}
