import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestepagePageRoutingModule } from './testepage-routing.module';

import { TestepagePage } from './testepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestepagePageRoutingModule
  ],
  declarations: [TestepagePage]
})
export class TestepagePageModule {
  

}
