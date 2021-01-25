import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing the plus1 method', () => {
    it('Should be increased, the point value of 1 to 3.', () => {
      const pointsStart = 1;
      const pointsEnd = 3;

      expect(component.points).toEqual(pointsStart);

      component.plus1();
      component.plus1();

      expect(component.points).toEqual(pointsEnd);
    });
  });

  describe('Testing the reset method', () => {
    it('Should be decrease, the point value of 3 to 0.', () => {
      const pointsEnd = 0;
      component.points = 3;

      component.reset();

      expect(component.points).toEqual(pointsEnd);
    });
  });
});
