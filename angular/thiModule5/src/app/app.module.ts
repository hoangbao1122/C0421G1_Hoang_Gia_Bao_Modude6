import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
// import { FilmComponent } from './film/model/film/film.component';
// import { NameFilm } from './film/model/name-film';
import {ListComponent} from './film/list/list.component';
import {HttpClientModule} from "@angular/common/http";
// import {CreateComponent} from './film/create/create.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {DeleteComponent} from './film/delete/delete.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
// import { CreateComponent } from './film/create/create.component';
import { EditComponent } from './film/edit/edit.component'
import {CarServiceService} from "./film/service/car-service.service";
import { CreateComponent } from './film/create/create.component';
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
