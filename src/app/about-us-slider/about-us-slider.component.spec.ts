import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSliderComponent } from './about-us-slider.component';

describe('AboutUsSliderComponent', () => {
  let component: AboutUsSliderComponent;
  let fixture: ComponentFixture<AboutUsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
