import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MovieModel } from '../../models/movie.model';
import { NgFor, NgIf } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from '../loading/loading.component';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [MatTableModule, NgIf, MatButtonModule, NgFor, LoadingComponent, RouterLink,MatInputModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['title', 'genre', 'startDate', 'actions'];
  dataSource: MovieModel[] | null = null;
  filteredDataSource: MovieModel[] | null = null;
  searchQuery: string = '';

  constructor(public utils: UtilsService) {
    MovieService.getMovies(0, 8)
      .then(rsp => {
        this.dataSource = rsp.data;
        this.filteredDataSource = rsp.data; 
      });
  }

  onSearchChange(): void {
    if (!this.dataSource) return;

    this.filteredDataSource = this.dataSource.filter(movie =>
      movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}

