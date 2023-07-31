import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaderTaskComponent } from './add-leader-task.component';

describe('AddLeaderTaskComponent', () => {
  let component: AddLeaderTaskComponent;
  let fixture: ComponentFixture<AddLeaderTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaderTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeaderTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
