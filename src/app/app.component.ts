import { Component } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private api: ApiService){}
  
  value: string = '';

  getAnagrams = (searchString:string) => {
    this.api.SolveAnagrams(searchString).subscribe((anagramList: string[]) => {
      console.log(anagramList);
      console.log("I'm done");
    })
  }
}
