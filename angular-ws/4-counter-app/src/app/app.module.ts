import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsGeneratorComponent } from './buttons-generator/buttons-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
