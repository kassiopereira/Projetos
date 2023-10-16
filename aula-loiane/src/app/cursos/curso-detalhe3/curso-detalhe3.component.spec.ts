import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalhe3Component } from './curso-detalhe3.component';

describe('CursoDetalhe3Component', () => {
  let component: CursoDetalhe3Component;
  let fixture: ComponentFixture<CursoDetalhe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalhe3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoDetalhe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
