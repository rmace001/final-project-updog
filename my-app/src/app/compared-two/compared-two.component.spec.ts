import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparedTwoComponent } from './compared-two.component';

describe('ComparedTwoComponent', () => {
  let component: ComparedTwoComponent;
  let fixture: ComponentFixture<ComparedTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparedTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparedTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
