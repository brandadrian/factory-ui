import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryUiLibComponent } from './factory-ui-lib.component';

describe('FactoryUiLibComponent', () => {
  let component: FactoryUiLibComponent;
  let fixture: ComponentFixture<FactoryUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryUiLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
