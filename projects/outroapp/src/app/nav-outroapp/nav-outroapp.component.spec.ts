import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOutroappComponent } from './nav-outroapp.component';

describe('NavOutroappComponent', () => {
  let component: NavOutroappComponent;
  let fixture: ComponentFixture<NavOutroappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavOutroappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOutroappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
