import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { CountryListComponent } from './app/country-list/country-list.component';
import { CountryFormComponent } from './app/country-form/country-form.component';

// Определение маршрутов
const routes: Routes = [
  { path: 'home', component: CountryListComponent }, // Главная страница
  { path: 'create', component: CountryFormComponent }, // Страница создания
  { path: 'edit/:id', component: CountryFormComponent }, // Страница редактирования
];

// Запуск приложения с маршрутизацией и HttpClient
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), // Подключение HttpClient
  ],
}).catch((err) => console.error(err));