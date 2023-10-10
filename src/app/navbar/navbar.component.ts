import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // * Properties
  searchTerm: string = '';

  // * Constructor
  constructor(private searchService: SearchService) {}

  // * Methods
  onSubmit() {
    this.searchService.addSearchTerm(this.searchTerm);
  }
}
