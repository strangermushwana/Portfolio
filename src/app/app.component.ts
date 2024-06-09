import { Component } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
import { NavbarComponent } from "./navbar/navbar.component"
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, NavbarComponent]
})
export class AppComponent {
  constructor(private router: Router) {}
}
