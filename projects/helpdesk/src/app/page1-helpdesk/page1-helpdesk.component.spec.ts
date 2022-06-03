import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1HelpdeskComponent } from './page1-helpdesk.component';

describe('Page1HelpdeskComponent', () => {
  let component: Page1HelpdeskComponent;
  let fixture: ComponentFixture<Page1HelpdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1HelpdeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1HelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
