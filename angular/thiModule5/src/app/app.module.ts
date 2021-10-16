import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';


import {ListComponent} from './car/list/list.component';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {DeleteComponent} from './car/delete/delete.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';

import { EditComponent } from './car/edit/edit.component'
import {CarServiceService} from "./car/service/car-service.service";
import { CreateComponent } from './car/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    // FilmComponent,
    ListComponent,
    // CreateComponent,
    DeleteComponent,
    // CreateComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [CarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
