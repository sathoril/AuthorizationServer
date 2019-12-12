import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaClientComponent } from './spa-client.component';

describe('SpaClientComponent', () => {
  let component: SpaClientComponent;
  let fixture: ComponentFixture<SpaClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
