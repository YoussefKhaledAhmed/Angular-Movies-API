import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular-API';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite(); // Run only on the browser
    }
  }

}
