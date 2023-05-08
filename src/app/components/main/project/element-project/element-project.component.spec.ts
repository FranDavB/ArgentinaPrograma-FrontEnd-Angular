import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementProjectComponent } from './element-project.component';

describe('ElementProjectComponent', () => {
  let component: ElementProjectComponent;
  let fixture: ComponentFixture<ElementProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
