import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AgregarPropiedadComponent } from './agregar-propiedad.component';

describe('AgregarcasaComponent', () => {
  let component: AgregarPropiedadComponent;
  let fixture: ComponentFixture<AgregarPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPropiedadComponent, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
