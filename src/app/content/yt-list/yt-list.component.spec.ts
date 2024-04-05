import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtListComponent } from './yt-list.component';

describe('YtListComponent', () => {
  let component: YtListComponent;
  let fixture: ComponentFixture<YtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YtListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
