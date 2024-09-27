import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Pet } from '../model/pet.entity';

@Injectable({
  providedIn: 'root'
})
export class PetsService extends BaseService<Pet>{
  constructor() { 
    super();
    this.resourceEndPoint = '/pets';
  }
}
