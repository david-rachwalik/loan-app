/*
 * Title: app-routing.module.ts
 * Author: David Rachwalik
 * Date: 2022/07/15
 * Description: App routing module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
