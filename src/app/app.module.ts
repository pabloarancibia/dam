import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoModule } from './listado/listado.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormListadoComponent } from './form-listado/form-listado.component';


@NgModule({
  declarations: [
    AppComponent,
    FormListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListadoModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
