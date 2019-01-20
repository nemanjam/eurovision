import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { VotingComponent } from './voting/voting.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [{ path: '', component: HomeComponent },
                        { path: 'countries', component: CountriesComponent },
                        { path: 'countries/:country', component: VotingComponent },
                        { path: 'results', component: ResultsComponent, pathMatch: 'full' },
                        { path: '**', component: HomeComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
