export class Pet {
  id: number;
  petName: string;
  birthDate: string;
  registrationDate: string;
  animalBreed: string;
  petGender: string;
  ownerId: number;
  hc:number;

  constructor(pet: {
    id?: number;
    petName?: string;
    birthDate?: string;
    registrationDate?: string;
    animalBreed?: string;
    petGender?: string;
    ownerId?: number;
    hc?: number;
  }) {
    this.id = pet.id || 0;
    this.petName = pet.petName || '';
    this.birthDate = pet.birthDate || '';
    this.registrationDate = pet.registrationDate || '';
    this.animalBreed = pet.animalBreed || '';
    this.petGender = pet.petGender || 'MALE';
    this.ownerId = pet.ownerId || 0;
    this.hc = pet.hc || 0;
  }
}
