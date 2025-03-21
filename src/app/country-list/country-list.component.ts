import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountryService, Country } from '../country.service';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  deleteCountry(id: string): void {
    this.countryService.deleteCountry(id).subscribe(() => {
      this.loadCountries();
    });
  }
}