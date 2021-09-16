import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() anagramSearchResults: string[] = [];
  @Output() anagramSearch: EventEmitter<string> =  new EventEmitter<string>();
  anagramSearchTerm: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  getAnagrams = () => {
    this.anagramSearch.emit(this.anagramSearchTerm);
  }

  resetSearchForm = () => {
    this.clearSearchModel();
    this.clearSearchResults();
  }

  clearSearchModel = () => {
    console.log("doing it")
    this.anagramSearchTerm = '';
  }

  clearSearchResults = () => {
    this.anagramSearchResults = [];
  }
}
