import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestepagePage } from './testepage.page';

const routes: Routes = [
  {
    path: '',
    component: TestepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestepagePageRoutingModule {}
