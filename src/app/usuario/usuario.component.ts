import {Component, Input} from '@angular/core';
import {IUsuario} from "../../models/Usuario";
import {UsuarioApiService} from "../services/usuario-api.service";
import {FormsModule} from "@angular/forms";
import {Provincias} from "../../models/Lugares/Provincias";
import {MunicipiosBuenosAires} from "../../models/Lugares/Buenos Aires";
import {BarriosCABA} from "../../models/Lugares/CABA";
import {MunicipiosCatamarca} from "../../models/Lugares/Catamarca";
import {MunicipiosChaco} from "../../models/Lugares/Chaco";
import {MunicipiosChubut} from "../../models/Lugares/Chubut";
import {MunicipiosCordoba} from "../../models/Lugares/Cordoba";
import {MunicipiosCorrientes} from "../../models/Lugares/Corrientes";
import {MunicipiosEntreRios} from "../../models/Lugares/Entre Rios";
import {MunicipiosFormosa} from "../../models/Lugares/Formosa";
import {MunicipiosJujuy} from "../../models/Lugares/Jujuy";
import {MunicipiosLaPampa} from "../../models/Lugares/La Pampa";
import {MunicipiosLaRioja} from "../../models/Lugares/La Rioja";
import {MunicipiosMendoza} from "../../models/Lugares/Mendoza";
import {MunicipiosMisiones} from "../../models/Lugares/Misiones";
import {MunicipiosNeuquen} from "../../models/Lugares/Neuquen";
import {MunicipiosRioNegro} from "../../models/Lugares/Rio Negro";
import {MunicipiosSalta} from "../../models/Lugares/Salta";
import {MunicipiosSanJuan} from "../../models/Lugares/San Juan";
import {MunicipiosSanLuis} from "../../models/Lugares/San Luis";
import {MunicipiosSantaCruz} from "../../models/Lugares/Santa Cruz";
import {MunicipiosSantaFe} from "../../models/Lugares/Santa Fe";
import {MunicipiosSantiagoDelEstero} from "../../models/Lugares/Santiago del Estero";
import {MunicipiosTierraDelFuego} from "../../models/Lugares/Tierra del Fuego";
import {MunicipiosTucuman} from "../../models/Lugares/Tucuman";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() usuario!: IUsuario;
  isEditing: boolean = false;

  provincias: string[] = Object.values(Provincias);
  municipios: string[] = [];

  constructor(private usuarioService: UsuarioApiService) { }

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.isEditing = false;
    this.usuarioService.putUsuario(this.usuario).subscribe((data : any) => {
      location.reload();
    });
  }

  onDelete() {
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe((data : any) => {
      location.reload();
    });
  }

  actualizarMunicipios(provincia: string): void {
    switch (provincia) {
      case Provincias.BUENOS_AIRES:
        this.municipios = Object.values(MunicipiosBuenosAires);
        break;
      case Provincias.CIUDAD_AUTONOMA_DE_BUENOS_AIRES:
        this.municipios = Object.values(BarriosCABA);
        break;
      case Provincias.CATAMARCA:
        this.municipios = Object.values(MunicipiosCatamarca);
        break;
      case Provincias.CHACO:
        this.municipios = Object.values(MunicipiosChaco);
        break;
      case Provincias.CHUBUT:
        this.municipios = Object.values(MunicipiosChubut);
        break;
      case Provincias.CORDOBA:
        this.municipios = Object.values(MunicipiosCordoba);
        break;
      case Provincias.CORRIENTES:
        this.municipios = Object.values(MunicipiosCorrientes);
        break;
      case Provincias.ENTRE_RIOS:
        this.municipios = Object.values(MunicipiosEntreRios);
        break;
      case Provincias.FORMOSA:
        this.municipios = Object.values(MunicipiosFormosa);
        break;
      case Provincias.JUJUY:
        this.municipios = Object.values(MunicipiosJujuy);
        break;
      case Provincias.LA_PAMPA:
        this.municipios = Object.values(MunicipiosLaPampa);
        break;
      case Provincias.LA_RIOJA:
        this.municipios = Object.values(MunicipiosLaRioja);
        break;
      case Provincias.MENDOZA:
        this.municipios = Object.values(MunicipiosMendoza);
        break;
      case Provincias.MISIONES:
        this.municipios = Object.values(MunicipiosMisiones);
        break;
      case Provincias.NEUQUEN:
        this.municipios = Object.values(MunicipiosNeuquen);
        break;
      case Provincias.RIO_NEGRO:
        this.municipios = Object.values(MunicipiosRioNegro);
        break;
      case Provincias.SALTA:
        this.municipios = Object.values(MunicipiosSalta);
        break;
      case Provincias.SAN_JUAN:
        this.municipios = Object.values(MunicipiosSanJuan);
        break;
      case Provincias.SAN_LUIS:
        this.municipios = Object.values(MunicipiosSanLuis);
        break;
      case Provincias.SANTA_CRUZ:
        this.municipios = Object.values(MunicipiosSantaCruz);
        break;
      case Provincias.SANTA_FE:
        this.municipios = Object.values(MunicipiosSantaFe);
        break;
      case Provincias.SANTIAGO_DEL_ESTERO:
        this.municipios = Object.values(MunicipiosSantiagoDelEstero);
        break;
      case Provincias.TIERRA_DEL_FUEGO:
        this.municipios = Object.values(MunicipiosTierraDelFuego);
        break;
      case Provincias.TUCUMAN:
        this.municipios = Object.values(MunicipiosTucuman
        );
        break;
    }
  }
}
