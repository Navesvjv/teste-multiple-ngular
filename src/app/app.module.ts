import { HelpdeskSharedModule } from './../../projects/helpdesk/src/app/app.module';
import { OutroappSharedModule } from './../../projects/outroapp/src/app/app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [AppComponent, NavComponent, TemplateComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
