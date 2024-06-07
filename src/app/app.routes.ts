import { Routes } from '@angular/router'
import { HomepageComponent } from './homepage/homepage.component'
import { AboutComponent } from './about/about.component'
import { ProjectsComponent } from './projects/projects.component'

export const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'about', component: AboutComponent},
    // { path: 'contact', component: AppComponent},
    { path: 'projects', component: ProjectsComponent},
    // { path: 'blog', component: AppComponent},
    // { path: 'work', component: AppComponent}
    {
      path: '**',
      redirectTo: ''
    }
]
