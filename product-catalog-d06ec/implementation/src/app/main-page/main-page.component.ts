
import { Component } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import {
  render_state_all_products, render_state_category_1,
  render_state_category_2, render_state_category_2_1,
  render_state_category_2_2, render_state_category_2_2_1,
  render_state_category_3, render_state_category_4
} from "./main-page.actions";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})

export class MainPageComponent {

  category$: Observable<string>;

  all_products$: any = [];

  constructor(
    private productsService: ProductsService,
    private store: Store<{ category: string }>) {
    this.category$ = store.select("category")
  }

  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe((data_fetch_chunk) => { this.all_products$ = data_fetch_chunk });
  }

  render_state_all_products() { this.store.dispatch(render_state_all_products()); }
  render_state_category_1() { this.store.dispatch(render_state_category_1()); }
  render_state_category_2() { this.store.dispatch(render_state_category_2()); }
  render_state_category_2_1() { this.store.dispatch(render_state_category_2_1()); }
  render_state_category_2_2() { this.store.dispatch(render_state_category_2_2()); }
  render_state_category_2_2_1() { this.store.dispatch(render_state_category_2_2_1()); }
  render_state_category_3() { this.store.dispatch(render_state_category_3()); }
  render_state_category_4() { this.store.dispatch(render_state_category_4()); }

}