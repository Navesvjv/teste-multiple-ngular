import { AppComponent } from './app.component';
import { Page2HelpdeskComponent } from './page2-helpdesk/page2-helpdesk.component';
import { Page1HelpdeskComponent } from './page1-helpdesk/page1-helpdesk.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'page1', component: Page1HelpdeskComponent },
  { path: 'page2', component: Page2HelpdeskComponent },
  { path: 'helpdesk', redirectTo: 'page1', pathMatch: 'full' },
  { path: '**', redirectTo: 'page1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
