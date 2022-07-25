/*
 * Title: home.component.ts
 * Author: David Rachwalik
 * Date: 2022/07/24
 * Description: Home component
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loanForm: FormGroup;
  principle: number;
  ratePerPeriod: number;
  numberOfPayments: number;
  monthlyPayment: number;

  constructor(private fb: FormBuilder) {
    this.principle = 0;
    this.ratePerPeriod = 0;
    this.numberOfPayments = 0;
    this.monthlyPayment = 0;
  }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanAmount: [null, Validators.required],
      interestRate: [null, Validators.required],
      numberOfYears: [null, Validators.required],
    });
  }

  get form() {
    return this.loanForm.controls;
  }

  onSubmit(event): void {
    // console.log(`form: `, this.loanForm);

    this.principle = this.form.loanAmount.value;
    this.ratePerPeriod = this.form.interestRate.value / 100 / 12;
    this.numberOfPayments = this.form.numberOfYears.value * 12;

    // console.log(`principle: ${this.principle}`);
    // console.log(`ratePerPeriod: ${this.ratePerPeriod}`);
    // console.log(`numberOfPayments: ${this.numberOfPayments}`);

    this.loanFormula();
    // console.log(`Monthly Payment: ${this.monthlyPayment}`);

    // console.log(`form is valid: `, this.loanForm.valid);
    // if (this.loanForm.valid) {
    //   event.currentTarget.reset();
    // }
  }

  // Amortized loan payment formula
  loanFormula(): void {
    this.monthlyPayment =
      (this.principle *
        (this.ratePerPeriod *
          Math.pow(1 + this.ratePerPeriod, this.numberOfPayments))) /
      (Math.pow(1 + this.ratePerPeriod, this.numberOfPayments) - 1);
  }
}
