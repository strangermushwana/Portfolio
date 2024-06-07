import { CommonModule, DOCUMENT } from '@angular/common'
import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { Subject, takeUntil, tap } from 'rxjs'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {

  $unsubscribe: Subject<void> = new Subject()

  activeRoute: string = ''

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.$unsubscribe),
      tap((res:any) => this.activeRoute = res?.url),
    ).subscribe()
  }

  toggleNav(): void {
    const btn = this.document.querySelector('.mobile-menu-button')
    const menu = this.document.querySelector('.navigation-menu')
    btn?.classList.toggle('hidden')
    menu?.classList.toggle('hidden')
  }

  ngOnDestroy(): void {
    this.$unsubscribe.unsubscribe()
  }

}
