import { DOCUMENT } from '@angular/common'
import { Component, Inject } from '@angular/core'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleNav(): void {
    const btn = this.document.querySelector('.mobile-menu-button')
    const menu = this.document.querySelector('.navigation-menu')
    btn?.classList.toggle('hidden')
    menu?.classList.toggle('hidden')
  }

}
