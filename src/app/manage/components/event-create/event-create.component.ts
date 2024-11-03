import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';
import { Event } from '../../model/event.entity';

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
  ],
  templateUrl: './event-create.component.html',
  styleUrl: './event-create.component.css'
})
export class EventCreateComponent {

  @Input() event!: Event;

  @ViewChild('eventForm', { static: false }) protected eventForm!: NgForm;

  constructor(private eventService: EventsService, private router: Router) {
    this.event = new Event({});
  }

  private resetEditState() {
    this.event = new Event({});
    this.eventForm.reset();
  }

  private isValid(): boolean {
    return this.eventForm.valid || false;
  }

  onSubmit() {
    if (this.isValid()) {
      this.createEvent();
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  createEvent() {

    this.eventService.create(this.event).subscribe((response: Event) => {
      this.router.navigate(['/manage/events']);
      this.resetEditState();

    });
  }

  onCancel() {
    this.resetEditState();
  }

}
