import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderTaskListComponent } from './leader-task-list.component';

describe('LeaderTaskListComponent', () => {
  let component: LeaderTaskListComponent;
  let fixture: ComponentFixture<LeaderTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
