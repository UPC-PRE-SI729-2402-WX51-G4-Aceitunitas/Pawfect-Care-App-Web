import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Pet } from '../../model/pet.entity';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pets-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pets-management.component.html',
  styleUrl: './pets-management.component.css'
})
export class PetsManagementComponent implements OnInit {
  protected petData!: Pet;
  protected columnsToDisplay: string[] =  [
    "Pet Name",
    "Birth Date",
    "Registration Date",
    "Animal Breed",
    "Pet's Gender",
    "HC",
    "Actions"
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
