import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmiterComponent } from './emmiter.component';

describe('EmmiterComponent', () => {
  let component: EmmiterComponent;
  let fixture: ComponentFixture<EmmiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmmiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmmiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
