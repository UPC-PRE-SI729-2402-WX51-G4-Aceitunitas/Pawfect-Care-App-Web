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
import { AuthenticationSectionComponent } from "../../../iam/components/authentication-section/authentication-section.component";
import { AuthenticationService } from '../../../iam/services/authentication.service';
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
    RouterOutlet, LanguageSwitcherComponent, AuthenticationSectionComponent],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {

  isSignedIn: boolean = false;
  options = [
    { path: '/', title: 'Home' },
    { path: '/manage/pets', title: 'List pets' },
    { path: '/manage/clients', title: 'List clients' },
    { path: '/manage/appointments', title: 'List appointments' },
  ];

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.isSignedIn.subscribe(isSignedIn => this.isSignedIn = isSignedIn);
  }

 

}
