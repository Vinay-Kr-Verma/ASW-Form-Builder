import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { AboutUsComponent } from './about-us.component';

let fixture: ComponentFixture<AboutUsComponent>;

describe('AboutUsComponent', () => {
    let titleService: Title;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ],
      providers:[{provide: Title, useClass: Title}],
      schemas:  [ NO_ERRORS_SCHEMA ]
    })
    .createComponent(AboutUsComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should have skyblue <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });
});