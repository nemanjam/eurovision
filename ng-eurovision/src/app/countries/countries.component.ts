import { Component, OnInit } from '@angular/core';

import { CountryService } from '../services/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.fetchCountries();
  }

  /**
   * Load countries from the server into component
   */
  fetchCountries() {
    this.countryService.getAllCountries()
    .subscribe(countries => { this.countries = countries; });
  }

}
