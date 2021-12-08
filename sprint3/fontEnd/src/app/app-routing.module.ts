import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./feature-module/home/home.component";
import {MenuComponent} from "./feature-module/menu/menu.component";
import {CartComponent} from "./feature-module/cart/cart.component";
import {CategoryComponent} from "./feature-module/category/category.component";
import {CreateCategoryComponent} from "./feature-module/category/create-category/create-category.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'cart', component: CartComponent},

  {path:'admin/category',component:CategoryComponent},
  {path:'admin/category/create',component:CreateCategoryComponent},
  {path: '**', redirectTo: "/not-found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
