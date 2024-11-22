import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatListItem, MatNavList } from "@angular/material/list";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { Router, RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
@Component({
  selector: 'app-side-navigation-bar',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterOutlet, LanguageSwitcherComponent,
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {
  options = [
    { path: '/', title: 'Home', icon: 'home' },
    { path: '/manage/pets', title: 'List pets', icon: 'pets' },
    { path: '/manage/clients', title: 'List clients', icon: 'group' },
    { path: '/manage/appointments', title: 'List appointments', icon: 'event' },
    { path: '/login', title: 'Login', icon: 'login' },
  ];

  constructor(private router: Router) {

  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }



}
