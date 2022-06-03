import { AppComponent } from './app.component';
import { Page2OutroappComponent } from './page2-outroapp/page2-outroapp.component';
import { Page1OutroappComponent } from './page1-outroapp/page1-outroapp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'outroapp/page1', component: Page1OutroappComponent },
  { path: 'outroapp/page2', component: Page2OutroappComponent },
  { path: 'outroapp', redirectTo: 'outroapp/page1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
