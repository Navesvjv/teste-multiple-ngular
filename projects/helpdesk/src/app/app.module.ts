import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1HelpdeskComponent } from './page1-helpdesk/page1-helpdesk.component';
import { Page2HelpdeskComponent } from './page2-helpdesk/page2-helpdesk.component';
import { NavHelpdeskComponent } from './nav-helpdesk/nav-helpdesk.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1HelpdeskComponent,
    Page2HelpdeskComponent,
    NavHelpdeskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class HelpdeskSharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: [],
    };
  }
}
