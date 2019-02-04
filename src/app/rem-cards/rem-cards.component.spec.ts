import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemCardsComponent } from './rem-cards.component';

describe('RemCardsComponent', () => {
  let component: RemCardsComponent;
  let fixture: ComponentFixture<RemCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
