import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  customersForm: Customers = {
    id: 0,
    firstName:'',
    lastName:'',
    email:'',
    created:'',
    updated: '',
  };

  constructor(private customersService:CustomersService,
    private router:Router) {}

  ngOnInit(): void {}

  create(){
    this.customersService.create(this.customersForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/customers/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
