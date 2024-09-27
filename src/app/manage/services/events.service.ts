import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Event } from '../model/event.entity';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseService<Event>{
  constructor() {
    super();
    this.resourceEndPoint = '/events';
  }
}
