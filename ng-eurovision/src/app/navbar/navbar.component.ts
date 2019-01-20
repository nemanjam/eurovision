import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CountryService } from '../services/country.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private countryService: CountryService,
              private router: Router) { }

  ngOnInit() {
  }

  /**
   * Reset votes for all countries and redirect to home page
   */
  resetVotes() {
    this.countryService.resetVotes()
      .subscribe( response => {
          this.router.navigateByUrl('/');
        }
    );
  }

}
