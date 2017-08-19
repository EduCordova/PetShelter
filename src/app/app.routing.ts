import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AdopcionComponent } from './adopcion/adopcion.component'
import { HomeComponent } from './home/home.component'
import { InformacionComponent } from './informacion/informacion.component'
import { DonacionesComponent } from './donaciones/donaciones.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { DescripcionComponent } from './descripcion/descripcion.component'

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'adopcion', children: [
            { path: '', component: AdopcionComponent },
            { path: ':id', component: DescripcionComponent }

        ]
    },
    { path: 'nosotros', component: InformacionComponent  },
    { path: 'donaciones', component: DonacionesComponent },

    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class RoutingModule { }