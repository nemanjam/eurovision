import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CountryService } from '../services/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  currentCountry: string;
  allCountries: Country[];
  filteredCountries: Country[];
  countriesSet: string[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private countryService: CountryService) { }

  ngOnInit() {
    this.currentCountry = this.route.snapshot.params['country'];
    this.fetchCountries();
  }

  /**
   * Load all countries from the server
   * Remove voting country from selects options
   */
  fetchCountries() {
    this.countryService.getAllCountries()
    .subscribe(countries => {
      this.allCountries = countries;

      this.filteredCountries = this.allCountries.slice();
      // remove current country
      this.countriesSet = [this.currentCountry];
      this.filteredCountries = this.allCountries.filter((country) => {
        return this.countriesSet.indexOf(country.name) === -1;
      });
    });
  }

  /**
  * Property to bind options for selects
  * @returns Country[]
  */
  get countries(): Country[] {
    return this.filteredCountries;
  }

  /**
  * Form submit handler and redirect
  * @param votingFormValue value of the form being submited
  * @returns Void
  */
  onSubmit(votingFormValue) {
    // console.log(votingFormValue);
    const votes = [];
    Object.keys(votingFormValue).map((key, index) => {
      const country = votingFormValue[key].split(',')[0];
      const points = votingFormValue[key].split(',')[1];
      votes.push({points: points, country: country});
    });
    // console.log(votes);
    this.countryService.submitVotes(this.currentCountry, votes)
    .subscribe( v => this.router.navigate(['/countries']) );
  }

  /**
  * Select changed handler
  * Remove options for set selects dynamically
  * @param selectValue value of the select control
  * @param votingFormValue value of the form
  * @returns Void
  */
  onChange(selectValue, votingFormValue) {

    this.countriesSet = Object.keys(votingFormValue).map((key, index) => {
      return votingFormValue[key].split(',')[0];
    });
    this.countriesSet.unshift(this.currentCountry);
    // console.log(this.countriesSet);

     this.filteredCountries = this.allCountries.filter((country) => { //na true ostavlja
      return this.countriesSet.indexOf(country.name) === -1;
    }).slice();
    this.filteredCountries = [...this.filteredCountries];
    // console.log(this.filteredCountries);

  }

}
