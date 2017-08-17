import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Para usar el look&feel ui bootstrap
// https://github.com/ng-bootstrap/ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselBasic
  ],
  imports: [
    // Para usar el look&feel ui bootstrap
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
