import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
})
export class CursosFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private modal: AlertModalService,
    private location: Location
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
    });
  }
  hasError(field: string) {
    return this.form.get(field)?.errors;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('submit');
      this.cursosService.createCurso(this.form.value).subscribe(
        (success) => {
          this.modal.showAlertSuccess('Success');
          this.location.back();
        },
        (error) => this.modal.showAlertDanger('Error'),
        () => console.log('request complete')
      );
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
