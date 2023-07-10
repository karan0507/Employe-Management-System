import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTableComponent } from './view-all-table.component';

describe('ViewAllTableComponent', () => {
  let component: ViewAllTableComponent;
  let fixture: ComponentFixture<ViewAllTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
