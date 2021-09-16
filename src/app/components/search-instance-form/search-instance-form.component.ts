import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnagramInstanceSearchTerms } from 'src/app/models/anagram-instance-search';

@Component({
  selector: 'app-search-instance-form',
  templateUrl: './search-instance-form.component.html',
  styleUrls: ['./search-instance-form.component.scss']
})
export class SearchInstanceFormComponent implements OnInit {

  @Input() anagramNumberInstanceResult: number | null = null;
  @Output() anagramInstanceSearch: EventEmitter<AnagramInstanceSearchTerms> =  new EventEmitter<AnagramInstanceSearchTerms>();
  anagramInstanceSearchTerms: AnagramInstanceSearchTerms = {
    searchTerm: '',
    stringToSearch: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

  searchForAnagramInstances = () => {
    if(this.anagramInstanceSearchTerms.searchTerm.trim() == "" || this.anagramInstanceSearchTerms.stringToSearch == ""){
      this.clearInstanceResults();
    }
    this.anagramInstanceSearch.emit(this.anagramInstanceSearchTerms);
  }

  resetInstanceForm = () => {
    this.clearInstanceModel();
    this.clearInstanceResults();
  }

  clearInstanceModel = () => {
    this.anagramInstanceSearchTerms = {
      searchTerm: '',
      stringToSearch: ''
    }
  }

  clearInstanceModelSearchString = () => {
    this.anagramInstanceSearchTerms.stringToSearch = "";
  }

  clearInstanceModelSearchTerm = () => {
    this.anagramInstanceSearchTerms.searchTerm = '';
  }

  clearInstanceResults = () => {
    this.anagramNumberInstanceResult = null;
  }

}
