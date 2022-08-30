import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.scss']
})
export class ItemCvComponent implements OnInit {
  @Input()
  personne!: Personne;
  @Output() selectedPersonne = new EventEmitter();
  constructor() {}
    
  ngOnInit(): void {
  }
  selectPersonne(){
    this.selectedPersonne.emit(
      this.personne
      );
  }
}
