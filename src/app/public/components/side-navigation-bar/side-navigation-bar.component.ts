import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-navigation-bar',
  standalone: true,
  imports:  [CommonModule,RouterLink],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {
  options = [
    { path: '/', title: 'Home' },
    { path: '/manage/pets', title: 'List pets' },
    { path: '/manage/clients', title: 'List clients' },
    { path: '/manage/events', title: 'List events' },
    { path: '/login', title: 'Login' },
  ];

}
