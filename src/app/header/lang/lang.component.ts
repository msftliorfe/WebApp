import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss'
})
export class LangComponent {
  
  constructor(@Inject(LOCALE_ID) private locale: string) {
    
  }
  
public get changeTo(): string{
  const heb= $localize `heb`;
  const eng= $localize `eng`;
 
  return this.locale=='en'? heb:eng
}

}
