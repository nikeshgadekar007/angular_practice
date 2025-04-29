import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-directives',
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './my-directives.component.html',
  styleUrl: './my-directives.component.css',
})
export class MyDirectivesComponent {
  // ng-class
  myName = 'Nikesh';
  isClass = true;

  // this.currentStyles = {
  //     'font-style': this.canSave ? 'italic' : 'normal',
  //     'font-weight': !this.isUnchanged ? 'bold' : 'normal',
  //     'font-size': this.isSpecial ? '24px' : '12px',
  //   };
  // ng-model
  myCity = 'Hong Kong';
}
