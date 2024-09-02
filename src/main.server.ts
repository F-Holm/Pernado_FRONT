import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
//pagina principal
//nav + caratula + footer
//mensajes
//notificaciones
//catalogo
//filtros
//agregarCasas
//MI cuenta
//login
//registro