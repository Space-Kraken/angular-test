import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService, Character } from "../api-data.service";

@Component({
  selector: 'app-api-characters-list',
  templateUrl: './api-characters-list.component.html',
  styleUrls: ['./api-characters-list.component.css']
})

export class ApiCharactersListComponent implements OnInit {
  characters: Character[] = [];
  pageIndex: number = 1;
  color: string;

  constructor(public apiData: ApiDataService) { }

  ngOnInit(): void {
    this.getCharacters();        
    this.color=localStorage.getItem('color')||'#ff0000';
  }

  // Get characters from API
  getCharacters(): void{
    this.apiData.getCharacters(this.pageIndex).subscribe((response:any)=>{
      this.characters = response;
      console.log(this.characters);
    });
  }

  // Get next or previous page
  changePage(pageIndex: number): void{
    this.pageIndex += pageIndex;
    this.getCharacters();
    window.scrollTo(0, 0);
  }
}
