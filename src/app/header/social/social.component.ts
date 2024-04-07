import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faYoutube, faLinkedin, faWikipediaW } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
})
export class SocialComponent {
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faWikipediaW = faWikipediaW;
}
