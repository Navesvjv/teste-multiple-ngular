import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHelpdeskComponent } from './nav-helpdesk.component';

describe('NavHelpdeskComponent', () => {
  let component: NavHelpdeskComponent;
  let fixture: ComponentFixture<NavHelpdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHelpdeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
