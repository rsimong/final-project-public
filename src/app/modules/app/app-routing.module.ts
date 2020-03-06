import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'a',
        loadChildren: () => import('./layouts/account/account.module').then(m => m.AccountModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'a'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
