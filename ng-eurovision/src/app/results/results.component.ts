import { Component, OnInit } from '@angular/core';

import { CountryService } from '../services/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  score: any[] = [];
  countries: Country[] = [];
  matrix: string[][] = [];
  hasResults = false;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.fetchCountries();
  }

  /**
   * Load countries from the server into component
   */
  fetchCountries() {
    this.countryService.getAllCountries()
    .subscribe(countries => {
      this.countries = countries;
      this.calcScore();
      this.calcMatrix();
    });
  }

  /**
  * Calculate and sort points for each country
  * @returns void
  */
  calcScore() {
    this.countries.forEach(c => {
      let points = 0;
      c.votes.forEach(v => { points += +v.points; });
      this.score.push({name: c.name, points: points});
    });
    this.score.sort((a, b) =>  +b.points - +a.points );
    if (this.score.length > 0 && this.score[0].points > 0) {
      this.hasResults = true;
    }
    // console.log(this.score);
  }

  /**
  * Calculate NxN matrix of points
  * @returns void
  */
  calcMatrix() {

    for (let i = 0; i < this.countries.length; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.countries.length; j++) {
        for (let k = 0; k < this.countries[j].votes.length; k++) {
          if (this.countries[j].votes[k].voter_country === this.countries[i].name) {
            this.matrix[i][j] = this.countries[j].votes[k].points + '';
            break;
          } else {
            this.matrix[i][j] = '';
            // break;
          }
        }
      }
    }
    // console.log(this.countries);
    // console.log(this.matrix);
  }

}
