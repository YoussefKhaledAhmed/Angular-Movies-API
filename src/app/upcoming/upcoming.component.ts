import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { UpcomingService } from '../services/upcoming.service';
import { Movie } from '../interfaces/movie.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-upcoming',
  imports: [CardComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent {

  private UpcomingMoviesService = inject(UpcomingService);
  public UpcomingMovies !: Movie[];
  private subscription !: Subscription;

  

  ngOnInit():void{
    this.subscription = this.UpcomingMoviesService.getUpcomingMovies().subscribe({
      next: (res) =>{
        this.UpcomingMovies = res.results;
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
