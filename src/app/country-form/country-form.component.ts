import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService, Country } from '../country.service';

@Component({
  selector: 'app-country-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {
  country: Country = { name: '', capital: '' };
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.countryService.getCountry(id).subscribe((data) => {
        this.country = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.countryService.updateCountry(this.country.id!, this.country).subscribe(() => {
        this.router.navigate(['/home']);
      });
    } else {
      this.countryService.createCountry(this.country).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }
}