import { Component } from '@angular/core';

import { ApiService } from './services/api.service';
import { AnagramInstanceSearchTerms } from './models/anagram-instance-search';

import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  searchResults: string[] = [];
  anagramNumberInstanceResult: number = 0;

  constructor(private api: ApiService){
    this.getAnagrams = _.debounce(this.getAnagrams, 100);
    this.searchAnagrams = _.debounce(this.searchAnagrams, 100);
  }

  getAnagrams = (searchString:string) => {
    if(searchString.trim() == ""){
      this.searchResults = [];
      return;
    }
    this.api.SolveAnagrams(searchString).subscribe((data: string[]) => {
      this.searchResults = data;
    })
  }

  searchAnagrams = (anagramSearch: AnagramInstanceSearchTerms) => {
    if(anagramSearch.searchTerm.trim() == "" || anagramSearch.stringToSearch.trim() == ""){
      return;
    }
     this.api.GetInstancesOfAnagrams(anagramSearch).subscribe((data: number) => {
      this.anagramNumberInstanceResult = data ?? 0;
     })
  }
}
