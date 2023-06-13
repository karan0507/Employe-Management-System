import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEditTeamComponent } from './ad-edit-team.component';

describe('AdEditTeamComponent', () => {
  let component: AdEditTeamComponent;
  let fixture: ComponentFixture<AdEditTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdEditTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdEditTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
