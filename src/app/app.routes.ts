import { Routes } from '@angular/router';
import { HubComponent } from './pages/hub/hub.component';

import { HomeComponent } from './pages/home/home.component';
import { RemerasComponent } from './pages/remeras/remeras.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'hub', pathMatch: 'full' },
  {
    path: 'hub',
    component: HubComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'remeras', component: RemerasComponent },
      { path: 'promociones', component: PromocionesComponent },
      { path: 'contacto', component: ContactoComponent },
      // { path: 'eventos/actividades/:id', component: ActividadesComponent },
      // { path: 'eventos/asignarA/:id', component: AsignarActividadesComponent },
      // {
      //   path: 'eventos/actividades/:idEvento/:idRubro',
      //   component: ActividadesComponent,
      // },
      // {
      //   path: 'eventos/actividades-asignadas/:idEvento',
      //   component: ActividadesAsignadasComponent,
      // },
    ],
  },
];
