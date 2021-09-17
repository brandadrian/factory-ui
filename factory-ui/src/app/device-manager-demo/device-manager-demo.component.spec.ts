import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceManagerDemoComponent } from './device-manager-demo.component';

describe('DeviceManagerDemoComponent', () => {
  let component: DeviceManagerDemoComponent;
  let fixture: ComponentFixture<DeviceManagerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceManagerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceManagerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
