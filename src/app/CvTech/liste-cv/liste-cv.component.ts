import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.scss']
})
export class ListeCvComponent implements OnInit {
  @Input() personnes: Personne[] = [];
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    }
  selectPersonne(selectedPersonne: any){
    this.selectedPersonne.emit(
      selectedPersonne
    );
  }
}
