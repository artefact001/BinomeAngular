import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TacheComponent } from "./tache/tache.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TacheComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Binome';
}
