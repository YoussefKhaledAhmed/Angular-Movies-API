import { Component, inject } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { DiscoverService } from '../services/discover.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private homeMoviesService = inject(DiscoverService);
  private homeMovies !: Movie[];
  private subscription !: Subscription;
  ngOnInit():void{
    this.subscription = this.homeMoviesService.getDiscoverMovies().subscribe({
      next: (res) =>{
        this.homeMovies = res.results;
      },
      error: (err) =>{
        console.log(err);
      },
      complete: () =>{
        console.log("complete");
      }
    });
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
