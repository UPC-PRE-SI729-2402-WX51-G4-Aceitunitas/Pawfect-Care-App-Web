import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { Pet } from '../../model/pet.entity';
import { PetsService } from '../../services/pets.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Client } from '../../model/client.entity';
import { ClientsService } from '../../services/clients.service';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-pet-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
  ],
  templateUrl: './pet-create.component.html',
  styleUrl: './pet-create.component.css'
})
export class PetCreateComponent implements OnInit {
  @Input() pet!:Pet;

  @ViewChild('petForm', { static: false }) protected petForm!: NgForm;

  options: Client[] = [];


  constructor(private petService: PetsService, private clientService: ClientsService,private router: Router) {
    this.pet = new Pet({});
  }


  ngOnInit() {
    this.getAllOwners();
  }

  private resetEditState() {
    this.petForm.reset();
  }

  private isValid(): boolean {
  if(this.petForm.value.ownerId==0)return false;
    return this.petForm.valid || false;
  }

  getAllOwners(){
    this.clientService.getAll().subscribe((response: Client[]) => {
      this.options=response;
    });
  }


  onSubmit() {

    if (this.isValid()) {
      this.createPet();
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  createPet() {
    console.log(this.pet)
    this.petService.create(this.pet).subscribe((response: Pet) => {

      this.router.navigate(['/manage/pets']);
      this.resetEditState();
    });
  }

  onCancel() {
    this.router.navigate(['/manage/pets']);
  }


}
