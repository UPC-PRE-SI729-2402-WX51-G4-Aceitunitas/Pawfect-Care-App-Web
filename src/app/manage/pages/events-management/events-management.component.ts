import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Event } from '../../model/event.entity';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events-management',
  standalone: true,
  imports: [CommonModule] ,
  templateUrl: './events-management.component.html',
  styleUrl: './events-management.component.css'
})
export class EventsManagementComponent {
  protected eventData!: Event;
  protected columnsToDisplay: string[] = [
    "ID",
    "Pet Name",
    "Start Date",
    "Client",
    "Contact Number",
    "Status",
    "Event Type",
    "Actions"
  ];
  protected dataSource!: Event[];

  private eventService: EventsService = inject(EventsService);

  constructor() {
    this.eventData = new Event({});
    this.dataSource = []
  }
  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents(){
    this.eventService.getAll().subscribe((response: Array<Event>) => {
      this.dataSource = response;
    });
  }
}
