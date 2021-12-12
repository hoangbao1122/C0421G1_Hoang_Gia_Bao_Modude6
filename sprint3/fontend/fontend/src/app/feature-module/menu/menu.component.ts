import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../core-module/food/food.service";
import {Food} from "../../entity/Food";
import {CategoryService} from "../../core-module/category/category.service";
import {ICategory} from "../../entity/ICategory";
import {CartService} from "../../core-module/cart/cart.service";
import {IOrderDetail} from "../../entity/IOrderDetail";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listFood!: Food []
  listFoodTrend!: Food [];
  category!: ICategory [];
  searchFood: any
  productList: any;
  //phan trang
  totalPrice: number = 0;
  totalLength: any;
  page: number = 1;
  id!: number;


  obj!: IOrderDetail [];
  public cartItem: [] | any;

  cart: number = 0;


  constructor(private foodService: FoodService, private categoryService: CategoryService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.getAllFood();
    this.getAllTrend();

    this.foodService.getAllFood().subscribe(data => {
      this.productList = data;
      this.productList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      })
    })
  }

  getCategory() {
    this.categoryService.getAllCategory().subscribe(next => {
      this.category = next;
      // console.log(next);
    })
  }


  getAllFood() {
    this.foodService.getAllFood().subscribe(data => {
      this.listFood = data;
      // console.log(this.listFood);
    })
  }

  getAllTrend() {
    this.foodService.getListTrend().subscribe(data => {
      this.listFoodTrend = data;
    })
  }

  getAllFoodFindCategory(id: number) {
    this.foodService.getFoodFinbyCategory(id).subscribe(data => {
      this.listFood = data;
      // console.log(this.listFood);
    })
  }

  getSortAtoZ() {
    this.foodService.getSortAToZ().subscribe(data => {
      this.listFood = data;
      // console.log(this.listFood);
    })
  }

  addToCart(item: any) {
    this.cartItem = this.cartService.addToCard(item);
    this.total();
    this.cart++;
  }

  total() {
    this.totalPrice = this.cartService.getTotalPrice();
    console.log(this.totalPrice);
  }

  resetNumberCart() {
    this.cart = 0;
  }
}

