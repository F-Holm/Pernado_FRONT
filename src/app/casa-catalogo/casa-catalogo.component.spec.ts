import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaCatalogoComponent } from './casa-catalogo.component';

describe('CasaCatalogoComponent', () => {
  let component: CasaCatalogoComponent;
  let fixture: ComponentFixture<CasaCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaCatalogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
