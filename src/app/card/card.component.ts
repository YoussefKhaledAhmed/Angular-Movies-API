import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() movie !: Movie; 

  @ViewChild('modalLayer') modalLayer !: ElementRef;


  modalToggle(): void{
    this.modalLayer.nativeElement.classList.remove('hidden');
    this.modalLayer.nativeElement.classList.add('block');
    console.log(this.modalLayer.nativeElement.classList);
  }
}
