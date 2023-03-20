import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionGuard } from './core/guards/sesion.guards';

export const routes: Routes = [
    { path: 'inicio', redirectTo: 'students/view', pathMatch: 'full' },
    {
        path: 'students',
        loadChildren: () => import('./students/students.module').then((modulo) => modulo.StudentsModule),
        canLoad: [SesionGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./authentication/authentication.module').then((modulo) => modulo.AuthenticationModule)
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

