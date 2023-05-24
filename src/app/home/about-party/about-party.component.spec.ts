import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartyComponent } from './about-party.component';

describe('AboutPartyComponent', () => {
  let component: AboutPartyComponent;
  let fixture: ComponentFixture<AboutPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
