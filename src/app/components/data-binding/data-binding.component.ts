import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, NgbModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  myName: string = 'Nikesh';
  isIndian: boolean = true;
  operatingSystems = [
    { id: 'win', name: 'Window' },
    { id: 'lin', name: 'Linux' },
    { id: 'maxo', name: 'MacOs' },
  ];
  isBtnDisable = signal(false);
  toggleMe = (event: Event) => {
    console.log('event====>', event);
  };

  private calculator = inject(BackendApiService);
  totaVal = this.calculator.add(10, 10);
}
