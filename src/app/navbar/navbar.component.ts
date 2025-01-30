import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FlowbiteService } from '../services/flowbite.service';
import { RouterLink, RouterLinkActive  } from '@angular/router';




@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Ensure correct plural form
})
export class NavbarComponent implements OnInit {
  
  constructor(private flowbiteService: FlowbiteService) {} // Inject FlowbiteService here

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      console.log('Flowbite loaded:', flowbite);
      // Add any custom Flowbite-related initialization here
    });
  }
}
