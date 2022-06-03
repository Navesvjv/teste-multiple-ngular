import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '', component: TemplateComponent },
  {
    path: 'outroapp',
    loadChildren: () =>
      import('../../projects/outroapp/src/app/app.module').then(
        (m) => m.OutroappSharedModule
      ),
  },
  {
    path: 'helpdesk',
    loadChildren: () =>
      import('../../projects/helpdesk/src/app/app.module').then(
        (m) => m.HelpdeskSharedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//
