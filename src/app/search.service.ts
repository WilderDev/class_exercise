import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // * Properties
  private searchHistory: string[] = [];

  // * Methods
  // Add to Search History
  addSearchTerm(term: string) {
    this.searchHistory.push(term);
  }

  // Get Search History
  getSearchHistory() {
    return this.searchHistory.slice();
  }
}
