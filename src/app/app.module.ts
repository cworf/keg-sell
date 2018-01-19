import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { KegEditComponent } from './keg-edit/keg-edit.component';
import { ListKegsComponent } from './list-kegs/list-kegs.component';
import { NewKegComponent } from './new-keg/new-keg.component';

@NgModule({
  declarations: [
    AppComponent,
    KegEditComponent,
    ListKegsComponent,
    NewKegComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
