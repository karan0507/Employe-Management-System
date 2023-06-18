import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAccounLinksComponent } from './add-edit-accoun-links.component';

describe('AddEditAccounLinksComponent', () => {
  let component: AddEditAccounLinksComponent;
  let fixture: ComponentFixture<AddEditAccounLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAccounLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAccounLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
