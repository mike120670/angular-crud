import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allCustomers: Customers[] = [];

  deleteModal: any;
  idTodelete: number = 0;

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }

  get() {
    this.customersService.get().subscribe((data) => {
      this.allCustomers = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.customersService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allCustomers = this.allCustomers.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
