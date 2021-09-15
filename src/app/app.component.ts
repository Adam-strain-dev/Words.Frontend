import { Component } from '@angular/core';

import { ApiService } from './services/api.service';
import { AnagramInstanceSearch } from './models/anagram-instance-search';

import { Observable } from 'rxjs';

import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  anagramSearchResults$: Observable<string[]> = new Observable<string[]>();
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
    this.anagramSearchResults$ = this.api.SolveAnagrams(searchString);
    this.anagramSearchResults$.subscribe((data) => {
      console.log(data);
    })
    // console.log(this.anagramSearchResults$);
    // .subscribe((anagramList: string[]) => {
    //    = anagramList;
    //   console.log(anagramList);
    //   console.log("I'm done");
    // })
  }

  searchAnagrams = (anagramSearch: AnagramInstanceSearch) => {
    if(this.anagramInstanceSearch.searchTerm.trim() == "" || this.anagramInstanceSearch.stringToSearch.trim() == ""){
      return;
    }
    this.anagramNumberInstanceResult$ = this.api.GetInstancesOfAnagrams(anagramSearch);
    this.anagramNumberInstanceResult$.subscribe((data) => {
      console.log(data);
    })    
  }
}
