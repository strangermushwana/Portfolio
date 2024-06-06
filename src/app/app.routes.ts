import { Routes } from '@angular/router'
import { HomepageComponent } from './homepage/homepage.component'

export const routes: Routes = [
    { path: '', component: HomepageComponent},
    // { path: 'about', component: AppComponent},
    // { path: 'contact', component: AppComponent},
    // { path: 'portfolio', component: AppComponent},
    // { path: 'skills', component: AppComponent},
    // { path: 'work', component: AppComponent}
    {
      path: '**',
      redirectTo: ''
    }
]
