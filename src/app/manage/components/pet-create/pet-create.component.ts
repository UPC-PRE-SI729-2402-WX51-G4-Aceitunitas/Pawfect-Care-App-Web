import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Pet } from '../../model/pet.entity';
import { PetsService } from '../../services/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
  ],
  templateUrl: './pet-create.component.html',
  styleUrl: './pet-create.component.css'
})
export class PetCreateComponent {
  @Input() pet!: Pet;

  @ViewChild('petForm', { static: false }) protected petForm!: NgForm;

  constructor(private petService: PetsService, private router: Router) {
    this.pet = new Pet({});
  }

  private resetEditState() {
    this.pet = new Pet({});
    this.petForm.reset();
  }

  private isValid(): boolean {
    return this.petForm.valid || false;
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
    this.petService.create(this.pet).subscribe((response: Pet) => {
      this.router.navigate(['/manage/pets']);
      this.resetEditState();
    });
  }

  onCancel() {
    this.resetEditState();
  }
}
