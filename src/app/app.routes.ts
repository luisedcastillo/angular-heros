import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { HeroesFilteredComponent } from './components/heroes-filtered/heroes-filtered.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeDetailComponent},
    { path: 'heroes/:filter', component: HeroesFilteredComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
