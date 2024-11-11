import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcasaComponent } from './modificarcasa.component';

describe('ModificarcasaComponent', () => {
  let component: ModificarcasaComponent;
  let fixture: ComponentFixture<ModificarcasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarcasaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarcasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
