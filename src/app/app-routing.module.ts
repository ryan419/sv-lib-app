import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routes as bookRoutes } from './book/book-routing.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'book',
  },
  {
    path: 'book',
    children: bookRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
