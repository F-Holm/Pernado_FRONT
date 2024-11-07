import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcasaComponent } from './agregarcasa.component';

describe('AgregarcasaComponent', () => {
  let component: AgregarcasaComponent;
  let fixture: ComponentFixture<AgregarcasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarcasaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarcasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
