import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { UtilsService } from '../../services/utils.service';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chart',
  imports: [MatCardModule, NgIf, MatInputModule, MatButtonModule, MatSelectModule,FormsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  public movie: MovieModel | null = null;
  public ticketCount: number = 1;   
  public ticketPrice: number = 7; 
  public totalPrice: number = 0; 

  constructor(private route: ActivatedRoute, public utils: UtilsService, private router: Router) {
    route.params.subscribe(params => {
      MovieService.getMovieById(params['movieId'])
        .then(rsp => {
          this.movie = rsp.data;
        });
    });
  }

  public updatePrice(): void {
    this.totalPrice = this.ticketCount * this.ticketPrice;
  }

  public doOrder() {
    const result = UserService.createReservation({
      movieId: this.movie!.movieId,
      title: this.movie!.title,
      count: this.ticketCount,
      pricePerTicket: this.ticketPrice,
      status: 'reserved',
      rating: null
    })

    result ? this.router.navigate(['/user']) : alert('Morate biti prijavljeni'), this.router.navigate(['/login'])
  }
}

