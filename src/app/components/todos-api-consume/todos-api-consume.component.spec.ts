import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosApiConsumeComponent } from './todos-api-consume.component';

describe('TodosApiConsumeComponent', () => {
  let component: TodosApiConsumeComponent;
  let fixture: ComponentFixture<TodosApiConsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosApiConsumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosApiConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
