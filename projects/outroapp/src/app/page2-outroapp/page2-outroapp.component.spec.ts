import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2OutroappComponent } from './page2-outroapp.component';

describe('Page2OutroappComponent', () => {
  let component: Page2OutroappComponent;
  let fixture: ComponentFixture<Page2OutroappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2OutroappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2OutroappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
