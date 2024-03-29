import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicleComponent } from './cicle.component';

describe('CicleComponent', () => {
  let component: CicleComponent;
  let fixture: ComponentFixture<CicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
