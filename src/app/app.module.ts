import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaComponent } from './lista/lista.componente';
import { BrawlStarsModule } from './brawl-stars/brawl-stars.module';



@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaComponent,
    

  ],
  imports: [
    BrowserModule,
    BrawlStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
