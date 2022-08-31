import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
  @Input() color =  'blue'; 
  @Input() bgColor = 'yellow';
  public size = '25px'
  constructor() { }

  ngOnInit(): void {
  }
  changeSize(size: string){
    this.size = size +'px'

  }
}
