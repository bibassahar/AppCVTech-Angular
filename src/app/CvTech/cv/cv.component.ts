import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  public personnes :Personne[]=[]; 
  selectedPersonne !: Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes=[
      new Personne (1,'Sahar Bibas','Sahar', 25, 'rotating_card_profile.png', 13012 ,'Full-stack developer'),
      new Personne (2,'Semer Bibas','Semer', 24, 'rotating_card_profile2.png', 13012 ,'Full-stack developer'),
      new Personne (3,'Ela Bibas','Ela', 18, 'rotating_card_profile.png', 13012 ,'Full-stack developer'),
      ];
      console.log(this.personnes)
  }
  selectPersonne(personne: Personne){
    this.selectedPersonne=personne;

  }  
}
