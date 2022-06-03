import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2HelpdeskComponent } from './page2-helpdesk.component';

describe('Page2HelpdeskComponent', () => {
  let component: Page2HelpdeskComponent;
  let fixture: ComponentFixture<Page2HelpdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2HelpdeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2HelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
