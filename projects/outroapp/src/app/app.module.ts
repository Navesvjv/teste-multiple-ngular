import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2OutroappComponent } from './page2-outroapp/page2-outroapp.component';
import { Page1OutroappComponent } from './page1-outroapp/page1-outroapp.component';
import { NavOutroappComponent } from './nav-outroapp/nav-outroapp.component';

@NgModule({
  declarations: [AppComponent, Page2OutroappComponent, Page1OutroappComponent, NavOutroappComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class OutroappSharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: [],
    };
  }
}
