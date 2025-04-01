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
import { RemerasComponent } from './pages/remeras/remeras.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';

// export const routes: Routes = [
//   { path: '', redirectTo: '', pathMatch: 'full' },
//   // { path: '', component: HubPagesComponent },
//   {
//     path: '',
//     component: HubComponent,
//     children: [
//       { path: '', component: HomeComponent },
//       { path: 'remeras', component: RemerasComponent },
//       // { path: 'automotores', component: AutomotorComponent },
//       // { path: 'inmuebles', component: InmueblesComponent },
//       // { path: 'liquidacion', component: LiquidacionComponent },
//       // { path: 'eventos/asignarA/:id', component: AsignarActividadesComponent },
//       // { path: 'eventos/actividades/:idEvento/:idRubro', component: ActividadesComponent },
//       // { path: 'eventos/actividades-asignadas/:idEvento', component: ActividadesAsignadasComponent },
//     ],
//   },
// ];

export const routes: Routes = [
  { path: '', redirectTo: 'hub', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  {
    path: 'hub',
    component: HubComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'inicio', component: HomeComponent },
      { path: 'remeras', component: RemerasComponent },
      // { path: 'promociones', component: PromocionesComponent },
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
