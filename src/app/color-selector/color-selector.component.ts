import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {
  color: string;
  colorInput: string=''
  constructor() { }

  ngOnInit(): void {
    this.initColor();
  }

  initColor(): void{
    this.color = localStorage.getItem('color')||'#F490B4';
    this.colorInput = this.color;
  }

  resetColor(): void{
    localStorage.removeItem('color');
    this.initColor();
    this.initColor();
  }

  changeColor(): void{
    localStorage.setItem('color', this.colorInput);
    this.initColor();
  }
}
