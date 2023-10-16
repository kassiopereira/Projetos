import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgSwitchCaseComponent } from './diretivas-ng-switch-case.component';

describe('DiretivasNgSwitchCaseComponent', () => {
  let component: DiretivasNgSwitchCaseComponent;
  let fixture: ComponentFixture<DiretivasNgSwitchCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasNgSwitchCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasNgSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
