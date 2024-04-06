import { NavigateComponent } from '@/shared/navigate/navigate.component';
import { Component } from '@angular/core';
import { ImageComponent } from '@/content/image/image.component';
import { ContactComponent } from '@/content/contact/contact.component';
import { RadioListComponent } from '@/content/radio-list/radio-list.component';
import { RadioComponent } from '@/content/radio/radio.component';
import { YtGalleryComponent } from '@/content/yt-gallery/yt-gallery.component';
import { YtComponent } from '@/content/yt/yt.component';
import { ImageGalleryComponent } from '@/content/image-gallery/image-gallery.component';
import { ArticleComponent } from '@/content/article/article.component';
import { ParagraphComponent } from '@/content/paragraph/paragraph.component';
import { ParagraphsComponent } from '@/content/paragraphs/paragraphs.component';
import { PlaceOrderComponent } from '@/content/place-order/place-order.component';
import { NewsGalleryComponent } from '@/content/news-gallery/news-gallery.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavigateComponent,
    ImageComponent,
    ContactComponent,
    RadioListComponent,
    RadioComponent,
    YtGalleryComponent,
    YtComponent,
    ImageGalleryComponent,
    ArticleComponent,
    ParagraphComponent,
    ParagraphsComponent,
    PlaceOrderComponent,
  NewsGalleryComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
