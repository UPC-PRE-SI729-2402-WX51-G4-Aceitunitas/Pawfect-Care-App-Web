import { Component, inject } from '@angular/core';
import { Client } from '../../model/client.entity';
import { ClientsService } from '../../services/clients.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients-management',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatInput,FormsModule,MatFormField,
    MatInput,
  ] ,
  templateUrl: './clients-management.component.html',
  styleUrl: './clients-management.component.css'
})
export class ClientsManagementComponent {

  protected clientData!: Client;
  protected columnsToDisplay: string[] = [
    "ID",
    "Full Name",
    "Phone",
    "Email",
    "Address",
    "Status",
    "HC",
    "Actions"
  ];

  protected dataSource!: Client[];

  private clientService: ClientsService = inject(ClientsService);

  constructor(private router: Router) {
    this.clientData = new Client({});
    this.dataSource = []
  }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents(){
    this.clientService.getAll().subscribe((response: Array<Client>) => {
      this.dataSource = response;
    });
  }

  navigateToAddClient() {
    this.router.navigate(['/manage/clients/add']);
  }

}
