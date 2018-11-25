import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent} from './components/settings.component';
import { PageComponent } from './components/page.component';
import { DateblockComponent } from './dateblock/dateblock.component';
import { SidebarComponent } from './components/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    PageComponent,
    DateblockComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
