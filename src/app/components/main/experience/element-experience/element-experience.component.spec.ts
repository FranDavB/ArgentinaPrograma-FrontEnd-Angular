import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementExperienceComponent } from './element-experience.component';

describe('ElementExperienceComponent', () => {
  let component: ElementExperienceComponent;
  let fixture: ComponentFixture<ElementExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
