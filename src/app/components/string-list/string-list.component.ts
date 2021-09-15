import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.scss']
})
export class StringListComponent implements OnInit {

  @Input() stringList: string[] | null = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
