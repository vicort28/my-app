import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  form:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  constructor(private formBuilder: FormBuilder) {}

  send(): void {
    const { numero, email, nombre } = this.form.value;
    alert(`Name: ${nombre}, Email: ${email}, Message: ${numero} `);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      nombre: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      numero: this.formBuilder.control(null),
    });
  }
}
