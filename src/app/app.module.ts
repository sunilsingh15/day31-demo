import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    DataEntryComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
