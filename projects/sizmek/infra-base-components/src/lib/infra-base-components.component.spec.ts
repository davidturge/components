import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraBaseComponentsComponent } from './infra-base-components.component';

describe('InfraBaseComponentsComponent', () => {
  let component: InfraBaseComponentsComponent;
  let fixture: ComponentFixture<InfraBaseComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfraBaseComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraBaseComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
