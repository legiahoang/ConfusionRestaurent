import { Component, OnInit } from "@angular/core";

import { Dish } from "./../shared/dist";
import { DISHES } from "./../shared/dishes";
import { DishService } from "./../services/dish.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  dishes: Dish[]; // if you want completely : dishes: Dish[]
  selectedDish: Dish;
  constructor(private dishService: DishService) {}

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}