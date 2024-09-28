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
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-events-management',
  standalone: true,
  imports: [
    CommonModule, 
    MatCell, 
    MatCellDef, 
    MatColumnDef, 
    MatHeaderCell, 
    MatHeaderRow, 
    MatHeaderRowDef, 
    MatPaginator, 
    MatRow, 
    MatRowDef, 
    MatSort, 
    MatSortHeader, 
    MatTable, 
    MatHeaderCellDef,
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
  ],
  templateUrl: './events-management.component.html',
  styleUrl: './events-management.component.css'
})
export class EventsManagementComponent {
  protected eventData!: Event;
  protected columnsToDisplay: string[] = [
    "id",
    "petName",
    "startDate",
    "client",
    "contactNumber",
    "status",
    "eventType",
    "actions"
  ];

  @ViewChild(MatSort, {static: false})
  protected sort!: MatSort;

  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;

  protected dataSource!: MatTableDataSource<any>;

  private eventsService: EventsService = inject(EventsService);

  constructor(private router: Router) {
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


  navigateToAddEvent() {
    this.router.navigate(['/manage/events/add']);
  }


}
