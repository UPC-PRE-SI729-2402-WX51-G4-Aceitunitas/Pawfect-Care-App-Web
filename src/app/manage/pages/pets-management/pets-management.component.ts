import { CommonModule } from '@angular/common';
import {  Component, inject, OnInit, ViewChild } from '@angular/core';
import { Pet } from '../../model/pet.entity';
import { PetsService } from '../../services/pets.service';
import { TranslateModule } from "@ngx-translate/core";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-pets-management',
  standalone: true,
  imports: [
    CommonModule, 
    MatCell, 
    MatCellDef, 
    MatColumnDef, 
    MatHeaderCell, 
    MatHeaderRow, 
    MatHeaderRowDef, 
    MatPaginator, 
    MatRow, 
    MatRowDef, 
    MatSort, 
    MatSortHeader, 
    MatTable, 
    MatHeaderCellDef,
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    TranslateModule
  ],
  templateUrl: './pets-management.component.html',
  styleUrl: './pets-management.component.css'
})
export class PetsManagementComponent implements OnInit {
  protected petData!: Pet;
  protected columnsToDisplay: string[] =  [
    "id",
    "birthDate",
    "registrationDate",
    "breed",
    "gender",
    "hc",
    "actions"
  ];
  @ViewChild(MatSort, {static: false})
  protected sort!: MatSort;

  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;

  protected dataSource!: MatTableDataSource<any>;

  private petService: PetsService = inject(PetsService);

  constructor(private router: Router) {
    this.petData = new Pet({});
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit() {
    this.getAllPets();
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getAllPets(){
    this.petService.getAll().subscribe((response: Array<Pet>) => {
      this.dataSource.data = response;
    });
  }

  navigateToAddPet() {
    this.router.navigate(['/manage/pets/add']);
  }

}
