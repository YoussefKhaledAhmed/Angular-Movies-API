import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { DiscoverService } from '../services/discover.service';
import { Subscription } from 'rxjs';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private homeMoviesService = inject(DiscoverService);
  public homeMovies !: Movie[];
  private subscription !: Subscription;

  

  ngOnInit():void{
    this.subscription = this.homeMoviesService.getDiscoverMovies().subscribe({
      next: (res) =>{
        this.homeMovies = res.results;
      },
      error: (err) =>{
        console.log(err);
      }
    });
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
