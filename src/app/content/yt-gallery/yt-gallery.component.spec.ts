import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtGalleryComponent } from './yt-gallery.component';

describe('YtGalleryComponent', () => {
  let component: YtGalleryComponent;
  let fixture: ComponentFixture<YtGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YtGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YtGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
