import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalResultComponent } from './final-result.component';

describe('FinalResultComponent', () => {
  let component: FinalResultComponent;
  let fixture: ComponentFixture<FinalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
