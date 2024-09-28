import { CommonModule } from '@angular/common';
import {Component, inject, ViewChild} from '@angular/core';
import { Event } from '../../model/event.entity';
import { EventsService } from '../../services/events.service';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-events-management',
  standalone: true,
  imports: [CommonModule, MatTable, MatColumnDef, MatHeaderCell, MatSortHeader, MatCell, MatHeaderCellDef, MatCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatPaginator, MatSort],
  templateUrl: './events-management.component.html',
  styleUrl: './events-management.component.css'
})
export class EventsManagementComponent {
  protected eventData!: Event;
  protected columnsToDisplay: string[] = [
    "id",
    "name",
    "startDate",
    "client",
    "contactNumber",
    "status",
    "eventType"
  ];

  @ViewChild(MatSort, {static: false})
  protected sort!: MatSort;

  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;

  protected isEditMode: boolean = false;
  protected dataSource!: MatTableDataSource<any>;

  private eventsService: EventsService = inject(EventsService);

  constructor() {
    this.isEditMode = false;
    this.eventData = new Event({});
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getAllEvents();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAllEvents(){
    this.eventsService.getAll().subscribe((response: Array<Event>) => {
      this.dataSource.data = response;
    });
  }

  onEventsAdded(course: Event) {
    this.eventData = course;
    this.createEvents();
  }

  createEvents(){
    this.eventsService.create(this.eventData).subscribe((response:Event) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    })
  }


}
