/*import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MedicalHistory } from '../../model/medical-history.entity';
import { MedicalHistoryService } from '../../services/medical-history.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-medical-history-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatPaginator,
    MatRow,
    MatSort,
    MatTable,
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    TranslateModule
  ],
  templateUrl: './medical-history-management.component.html',
  styleUrls: ['./medical-history-management.component.css']
})
export class MedicalHistoryManagementComponent {
  protected medicalHistoryData!: MedicalHistory;
  protected columnsToDisplay: string[] = [
    'id',
    'petName',
    'date',
    'condition',
    'treatment',
    'vet',
    'actions'
  ];

  @ViewChild(MatSort, { static: false })
  protected sort!: MatSort;

  @ViewChild(MatPaginator, { static: false })
  protected paginator!: MatPaginator;

  protected dataSource!: MatTableDataSource<any>;

  private medicalHistoryService: MedicalHistoryService = inject(MedicalHistoryService);

  constructor(private router: Router) {
    this.medicalHistoryData = new MedicalHistory({});
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getAllMedicalHistories();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAllMedicalHistories() {
    this.medicalHistoryService.getAll().subscribe((response: Array<MedicalHistory>) => {
      this.dataSource.data = response;
    });
  }

  navigateToAddHistory() {
    this.router.navigate(['/manage/medical-history/add']); // Ruta para agregar historial médico
  }
}
*/

