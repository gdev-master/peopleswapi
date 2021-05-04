import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPersonComponent } from './Components/search-person/search-person.component';
import { LookupValueComponent } from './Components/lookup-value/lookup-value.component';
import { AngularMaterialModule } from './Shared/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SearchPersonComponent,
    LookupValueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
