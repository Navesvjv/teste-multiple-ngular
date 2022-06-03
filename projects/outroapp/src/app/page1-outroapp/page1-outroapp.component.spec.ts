import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1OutroappComponent } from './page1-outroapp.component';

describe('Page1OutroappComponent', () => {
  let component: Page1OutroappComponent;
  let fixture: ComponentFixture<Page1OutroappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1OutroappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1OutroappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
