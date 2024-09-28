import { Component, inject } from '@angular/core';
import { Client } from '../../model/client.entity';
import { ClientsService } from '../../services/clients.service';
import { CommonModule } from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-management',
  standalone: true,
  imports: [CommonModule, MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderRow, MatHeaderRowDef, MatPaginator, MatRow, MatRowDef, MatSort, MatSortHeader, MatTable, MatHeaderCellDef],
  templateUrl: './clients-management.component.html',
  styleUrl: './clients-management.component.css'
})
export class ClientsManagementComponent {

  protected clientData!: Client;
  protected columnsToDisplay: string[] = [
    "id",
    "fullName",
    "phone",
    "email",
    "address",
    "status",
    "hc"
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
