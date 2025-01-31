import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PopularService } from '../services/popular.service';
import { Movie } from '../interfaces/movie.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popular',
  imports: [CardComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {

  private popularMoviesService = inject(PopularService);
  public popularMovies !: Movie[];
  private subscription !: Subscription;

  

  ngOnInit():void{
    this.subscription = this.popularMoviesService.getPopularMovies().subscribe({
      next: (res) =>{
        this.popularMovies = res.results;
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
