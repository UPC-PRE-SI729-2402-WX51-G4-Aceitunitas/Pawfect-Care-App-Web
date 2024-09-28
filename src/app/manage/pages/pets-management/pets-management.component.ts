import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
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
  MatTable
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-pets-management',
  standalone: true,
  imports: [TranslateModule, CommonModule, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatSort, MatHeaderCellDef, MatCellDef, MatSortHeader, MatHeaderRow, MatRow, MatHeaderRowDef, MatRowDef, MatPaginator],
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
    "hc"
  ];
  protected dataSource!: Pet[];

  private petService: PetsService = inject(PetsService);

  constructor() {
    this.petData = new Pet({});
    this.dataSource = []
  }
  ngOnInit() {
    this.getAllPets();
  }

  getAllPets(){
    this.petService.getAll().subscribe((response: Array<Pet>) => {
      this.dataSource = response;
    });
  }

}
