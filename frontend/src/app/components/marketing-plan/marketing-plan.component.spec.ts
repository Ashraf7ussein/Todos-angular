import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingPlanComponent } from './marketing-plan.component';

describe('MarketingPlanComponent', () => {
  let component: MarketingPlanComponent;
  let fixture: ComponentFixture<MarketingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
