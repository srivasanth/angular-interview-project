import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatactUsComponent } from './conatact-us.component';

describe('ConatactUsComponent', () => {
  let component: ConatactUsComponent;
  let fixture: ComponentFixture<ConatactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConatactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
