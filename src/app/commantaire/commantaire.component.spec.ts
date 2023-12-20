import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommantaireComponent } from './commantaire.component';

describe('CommantaireComponent', () => {
  let component: CommantaireComponent;
  let fixture: ComponentFixture<CommantaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommantaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommantaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
