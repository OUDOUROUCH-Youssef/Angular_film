import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommantaireComponent } from './list-commantaire.component';

describe('ListCommantaireComponent', () => {
  let component: ListCommantaireComponent;
  let fixture: ComponentFixture<ListCommantaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCommantaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCommantaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
