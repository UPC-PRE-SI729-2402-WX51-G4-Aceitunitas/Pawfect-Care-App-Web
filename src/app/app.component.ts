import { Component } from '@angular/core';
import { SideNavigationBarComponent } from "./public/components/side-navigation-bar/side-navigation-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SideNavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pawfectCareApp';
}
