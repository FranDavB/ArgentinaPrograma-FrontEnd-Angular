import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSkillComponent } from './element-skill.component';

describe('ElementSkillComponent', () => {
  let component: ElementSkillComponent;
  let fixture: ComponentFixture<ElementSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
