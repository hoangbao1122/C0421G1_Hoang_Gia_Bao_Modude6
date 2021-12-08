import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./feature-module/home/home.module";

import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MenuModule} from "./feature-module/menu/menu.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { CartComponent } from './feature-module/cart/cart.component';
import { CategoryComponent } from './feature-module/category/category.component';

import { CreateCategoryComponent } from './feature-module/category/create-category/create-category.component';
import { HeaderComponent } from './feature-module/header/header.component';
import { FooterComponent } from './feature-module/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { DeleteCategoryComponent } from './feature-module/category/delete-category/delete-category.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditCategoryComponent } from './feature-module/category/edit-category/edit-category.component';





@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoryComponent,

    CreateCategoryComponent,
     HeaderComponent,
     FooterComponent,
     DeleteCategoryComponent,
     EditCategoryComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MenuModule,
    // CartModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule

    // Ng2SearchPipeModule
    // CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
