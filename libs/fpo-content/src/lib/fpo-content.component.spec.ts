import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpoContentComponent } from './fpo-content.component';

describe('FpoContentComponent', () => {
  let component: FpoContentComponent;
  let fixture: ComponentFixture<FpoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
