import { Component } from '@angular/core';

import { ApiService } from './services/api.service';
import { AnagramInstanceSearch } from './models/anagram-instance-search';

import { Observable, of } from 'rxjs';

import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  anagramSearchResults$: Observable<string[]> | null = new Observable<string[]>();
  anagramNumberInstanceResult$: Observable<number> = new Observable<number>();

  constructor(private api: ApiService){
    this.getAnagrams = _.debounce(this.getAnagrams, 0);
    this.searchAnagrams = _.debounce(this.searchAnagrams, 0);
  }
  
  anagramSearchTerm: string = '';
  anagramInstanceSearch: AnagramInstanceSearch = {
    searchTerm: '',
    stringToSearch: ''
  };

  getAnagrams = (searchString:string) => {
    if(searchString.trim() == ""){
      this.anagramSearchResults$ = of([]);
    }
    this.anagramSearchResults$ = this.api.SolveAnagrams(searchString);
  }

  searchAnagrams = (anagramSearch: AnagramInstanceSearch) => {
    if(this.anagramInstanceSearch.searchTerm.trim() == "" || this.anagramInstanceSearch.stringToSearch.trim() == ""){
    }
    this.anagramNumberInstanceResult$ = this.api.GetInstancesOfAnagrams(anagramSearch);
    // this.anagramNumberInstanceResult$.subscribe((data) => {
      
    // })    
  }

  clearSearchModel = () => {
    this.anagramSearchResults$ = of();
  }

  clearInstanceModel = () => {
    this.anagramNumberInstanceResult$ = of();
  }
}
