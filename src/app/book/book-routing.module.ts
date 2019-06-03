import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { DetailModule } from './detail/detail.module';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./detail/detail.module').then(mod => DetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
