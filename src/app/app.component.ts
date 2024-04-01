import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RouterModule],
  // templateUrl: './app.component.html',
  template:`<main>
  <header class='brand-name'>
    <img class='brand-logo' src="/assets/logo.svg" alt="logo" aria-hidden="true"/>
  </header>
  <section>
    <router-outlet>
    <!-- <app-home></app-home> -->
    </router-outlet>
  </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-task-manager';
}
