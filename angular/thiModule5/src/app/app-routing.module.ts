import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./car/list/list.component";
import {EditComponent} from "./car/edit/edit.component";
import {CreateComponent} from "./car/create/create.component";


const routes: Routes = [
  {path: "", component: ListComponent},
  {path: "car/list", component: ListComponent},
  {path: "car/add", component: CreateComponent},
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
