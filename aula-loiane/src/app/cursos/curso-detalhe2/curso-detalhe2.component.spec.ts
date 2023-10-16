import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalhe2Component } from './curso-detalhe2.component';

describe('CursoDetalhe2Component', () => {
  let component: CursoDetalhe2Component;
  let fixture: ComponentFixture<CursoDetalhe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalhe2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoDetalhe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
