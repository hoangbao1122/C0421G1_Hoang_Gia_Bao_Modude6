import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./film/list/list.component";
import {EditComponent} from "./film/edit/edit.component";
import {CreateComponent} from "./film/create/create.component";
// import {CreateComponent} from "./film/create/create.component";

const routes: Routes = [
  {path: "", component: ListComponent},
  {path: "list", component: ListComponent},
  {path: "add", component: CreateComponent},
  {path: ":id/edit", component: EditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
