import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Country, Vote } from '../models/country';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private apiService: ApiService) { }

  /**
  * Get all countries from the server
  * @returns Observable of Country[]
  */
  getAllCountries(): Observable<Country[]> {
    return this.apiService.get('/countries')
        .pipe(map(data => data.map(c => {
          const c1 = {};
          c1['name'] = c.name_id;
          c1['flag'] = c.flag;
          c1['hasVoted'] = c.has_voted;
          c1['votes'] = c.votes;
          return c1;
        })));
  }

  /**
  * Send votes to the server
  * @param country country owner of the votes
  * @param votes votes to send
  * @returns void
  */
 submitVotes(country, votes: Vote[]) {
     return this.apiService.put('/country/' + country, {votes: votes} )
        .pipe(map(data => data.votes));
 }

  /**
  * Reset votes for all countries
  */
 resetVotes() {
    return this.apiService.delete('/countries/reset');
 }

}



/*
  Mocks used for testing

  countriesMock: Country[] = [
    {name: 'France', flag: 'flag-icon-fr', hasVoted: false, votes: []},
    {name: 'Germany', flag: 'flag-icon-de', hasVoted: false, votes: []},
    {name: 'Austria', flag: 'flag-icon-at', hasVoted: false, votes: []},
    {name: 'Hungary', flag: 'flag-icon-hu', hasVoted: false, votes: []},
    {name: 'Italy', flag: 'flag-icon-it', hasVoted: false, votes: []},
    {name: 'Romania', flag: 'flag-icon-ro', hasVoted: false, votes: []},
    {name: 'Bulgaria', flag: 'flag-icon-bg', hasVoted: false, votes: []},
    {name: 'Israel', flag: 'flag-icon-il', hasVoted: false, votes: []},
    {name: 'Portugal', flag: 'flag-icon-pt', hasVoted: false, votes: []},
    {name: 'Belgium', flag: 'flag-icon-be', hasVoted: false, votes: []}
  ];

  countries: Country[] = [
    {name: 'France', flag: 'flag-icon-fr', hasVoted: true,
    votes: [{points: 1, country: 'Germany'}, {points: 2, country: 'Austria'}, , {points: 3, country: 'Hungary'},
            {points: 4, country: 'Romania'}, {points: 5, country: 'Bulgaria'}, , {points: 6, country: 'Russia'},
            {points: 7, country: 'Italy'}, {points: 8, country: 'Portugal'}, , {points: 10, country: 'Belgium'},
            {points: 12, country: 'Israel'}]},
    {name: 'Germany', flag: 'flag-icon-de', hasVoted: true,
    votes: [{points: 1, country: 'Israel'}, {points: 2, country: 'Hungary'}, , {points: 3, country: 'Romania'},
            {points: 4, country: 'Bulgaria'}, {points: 5, country: 'Russia'}, , {points: 6, country: 'Italy'},
            {points: 7, country: 'Portugal'}, {points: 8, country: 'Belgium'}, , {points: 10, country: 'France'},
            {points: 12, country: 'Germany'}]},
    {name: 'Austria', flag: 'flag-icon-at', hasVoted: true,
    votes: [{points: 1, country: 'Hungary'}, {points: 2, country: 'Romania'}, , {points: 3, country: 'Bulgaria'},
            {points: 4, country: 'Russia'}, {points: 5, country: 'Italy'}, , {points: 6, country: 'Portugal'},
            {points: 7, country: 'Belgium'}, {points: 8, country: 'France'}, , {points: 10, country: 'Germany'},
            {points: 12, country: 'Austria'}]},
    {name: 'Hungary', flag: 'flag-icon-hu', hasVoted: false, votes: []},
    {name: 'Italy', flag: 'flag-icon-it', hasVoted: false, votes: []},
    {name: 'Romania', flag: 'flag-icon-ro', hasVoted: false, votes: []},
    {name: 'Bulgaria', flag: 'flag-icon-bg', hasVoted: false, votes: []},
    {name: 'Israel', flag: 'flag-icon-il', hasVoted: false, votes: []},
    {name: 'Portugal', flag: 'flag-icon-pt', hasVoted: false, votes: []},
    {name: 'Belgium', flag: 'flag-icon-be', hasVoted: false, votes: []}
  ];
  */
