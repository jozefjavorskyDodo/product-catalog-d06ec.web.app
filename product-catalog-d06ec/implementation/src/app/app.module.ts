
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { ProductDetailPageComponent } from "./product-detail-page/product-detail-page.component";
import { EditNameDialog } from "./product-detail-page/product-detail-page.component";
import { EditDescriptionDialog } from "./product-detail-page/product-detail-page.component";
import { EditPriceDialog } from "./product-detail-page/product-detail-page.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { categoryReducer } from "./main-page/main-page.reducer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: "product/:id", component: ProductDetailPageComponent },
      { path: "**", component: MainPageComponent }
    ]),
    HttpClientModule,
    StoreModule.forRoot({ category: categoryReducer }),
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductDetailPageComponent,
    EditNameDialog,
    EditDescriptionDialog,
    EditPriceDialog
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
