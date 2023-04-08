import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementexpComponent } from './elementexp.component';

describe('ElementexpComponent', () => {
  let component: ElementexpComponent;
  let fixture: ComponentFixture<ElementexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
