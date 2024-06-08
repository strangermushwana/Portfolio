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
      tap(() => {
        const menu = this.document.querySelector('.navigation-menu')
        const cross = this.document.querySelector('.mobile-menu-cross')
        const btn = this.document.querySelector('.mobile-menu-button')
        menu?.classList.add('hidden')
        cross?.classList.add('hidden')
        btn?.classList.remove('hidden')
      }),
      tap(() => window?.scroll(0,0))
    ).subscribe()
  }

  toggleNav(): void {
    const cross = this.document.querySelector('.mobile-menu-cross')
    const btn = this.document.querySelector('.mobile-menu-button')
    const menu = this.document.querySelector('.navigation-menu')
    btn?.classList.toggle('hidden')
    menu?.classList.toggle('hidden')
    cross?.classList.toggle('hidden')
  }

  ngOnDestroy(): void {
    this.$unsubscribe.unsubscribe()
  }

}
