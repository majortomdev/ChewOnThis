import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page.component';
import { DateblockComponent } from './dateblock/dateblock.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    DateblockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
