import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  teams = ['est','om','barca','milan']
  est = false;
  barca = true;
  milan = false;
  show = true;
  constructor() { }

  ngOnInit(): void {
  }
  changeTeam(){
    this.est = true;
    this.barca = false;
    this.milan = false;

  }
}
