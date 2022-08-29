import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personnes: Personne[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.personnes=[
      new Personne(id:1,lastname:'Sahar Bibas',firstname:'Sahar',age:25,path:'rotating_card_profile.png',cin:13012,job:'Full-stack developer'),
      new Personne(id:2,lastname:'Sousou',firstname:'Sousou',age:25,path:'rotating_card_profile2.png',cin:130,job:'Full-stack developer')
    ]
  }

}
