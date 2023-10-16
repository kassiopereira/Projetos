import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmitComponent } from './change-emit.component';

describe('ChangeEmitComponent', () => {
  let component: ChangeEmitComponent;
  let fixture: ComponentFixture<ChangeEmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
