import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFormationComponent } from './element-formation.component';

describe('ElementFormationComponent', () => {
  let component: ElementFormationComponent;
  let fixture: ComponentFixture<ElementFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
