import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  customersForm: Customers = {
    id: 0,
    firstName:'',
    lastName:'',
    email:'',
    created:'',
    updated: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.customersService.getById(id).subscribe((data) => {
      this.customersForm = data;
    });
  }

  update() {
    this.customersService.update(this.customersForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/customers/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
