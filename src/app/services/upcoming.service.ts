import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  private readonly httpClient = inject(HttpClient);

  getUpcomingMovies():Observable<any>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODY1NmQwNTY2MjEzNzZiMWRjYzhkNGRkNzBmYjM2YyIsIm5iZiI6MTczODE4NDgwNi44NjcsInN1YiI6IjY3OWE5ODY2ZTIxY2JiOWE1YjM0NDIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wP58sJ6DNG0XmhReT4IhwY9m8oRu2TTFzBv4MWZuA8M'
      }
    };
    return this.httpClient.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',options);
  }
}
