export class Pet {
  id: number;
  name: string;
  birthDate: string;
  registrationDate: string;
  breed: string;
  gender: string;
  hc: number;

  constructor(pet: {
    id?: number
    name?: string,
    birthDate?: string,
    registrationDate?: string,
    breed?: string,
    gender?: string,
    hc?: number
  }) {
    this.id = pet.id || 0;
    this.name = pet.name || '';
    this.birthDate = pet.birthDate || '';
    this.registrationDate = pet.registrationDate || '';
    this.breed = pet.breed || '';
    this.gender = pet.gender || 'U';
    this.hc = pet.hc || 0;
  }
}
