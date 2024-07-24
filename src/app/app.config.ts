import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';  // Import CommonModule


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    FormsModule , // Add FormsModule here
    CommonModule  // Include CommonModule
  ]
};
