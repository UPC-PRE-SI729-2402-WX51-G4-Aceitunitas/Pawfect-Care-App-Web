import { Component, inject } from '@angular/core';
import { Client } from '../../model/client.entity';
import { ClientsService } from '../../services/clients.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-management',
  standalone: true,
  imports: [CommonModule] ,
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
    "HC"
  ];

  protected dataSource!: Client[];

  private clientService: ClientsService = inject(ClientsService);

  constructor() {
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

}
