import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments: any[] = [];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments() {
    this.paymentService.getAllPayments().subscribe((data: any) => {
      this.payments = data;
    }, error => console.error(error));
  }
}
