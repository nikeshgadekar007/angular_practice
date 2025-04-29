import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-directives',
  imports: [CommonModule],
  templateUrl: './my-directives.component.html',
  styleUrl: './my-directives.component.css',
})
export class MyDirectivesComponent {
  // ng-class
  myName = 'Nikesh';
  isClass = true;

  // ng-style
  // this.currentStyles = {
  //     'font-style': this.canSave ? 'italic' : 'normal',
  //     'font-weight': !this.isUnchanged ? 'bold' : 'normal',
  //     'font-size': this.isSpecial ? '24px' : '12px',
  //   };

  // ng-model
  myCity = 'Hong Kong';

  // ng-if
  divVisible =  true;

  // NgFor & NgSwitch
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];
}
