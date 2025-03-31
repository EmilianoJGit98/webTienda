import { Routes } from '@angular/router';
import { HubComponent } from './pages/hub/hub.component';

// import { HomeComponent } from './pages/home/home.component';
// import { HubPagesComponent } from './pages/hub-pages/hub-pages.component';
// import { AutomotorComponent } from './pages/automotor/automotor.component';
// import { InmueblesComponent } from './pages/inmuebles/inmuebles.component';
// import { LiquidacionComponent } from './pages/liquidacion/liquidacion.component';
// import { ListaImpuestosComponent } from './pages/lista-impuestos/lista-impuestos.component';
import { LayoutComponent } from '../../../routing/src/app/pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '', component: HubPagesComponent },
  {
    path: '',
    component: HubComponent,
    children: [
      { path: '', component: HomeComponent },
      // { path: 'impuestos', component: ListaImpuestosComponent },
      // { path: 'automotores', component: AutomotorComponent },
      // { path: 'inmuebles', component: InmueblesComponent },
      // { path: 'liquidacion', component: LiquidacionComponent },
      // { path: 'eventos/asignarA/:id', component: AsignarActividadesComponent },
      // { path: 'eventos/actividades/:idEvento/:idRubro', component: ActividadesComponent },
      // { path: 'eventos/actividades-asignadas/:idEvento', component: ActividadesAsignadasComponent },
    ],
  },
];
