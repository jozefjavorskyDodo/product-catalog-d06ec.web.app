
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { ProductsService } from "../services/products.service";

export interface DialogData {
  edited_name: string;
  edited_description: string;
  edited_price: number;
}

@Component({
  selector: "app-product-detail-page",
  templateUrl: "./product-detail-page.component.html",
  styleUrls: ["./product-detail-page.component.css"]
})

export class ProductDetailPageComponent {

  edited_name: string = '';

  edited_description: string = '';

  edited_price: number = Number();

  prdcts$: any = [];

  id_of_selected_product: string = '';

  constructor(private router: Router,
    private productsService: ProductsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.id_of_selected_product = String(this.router.url.split('/')[2]);
    this.productsService
      .getProducts()
      .subscribe((fetched_stuff) => { this.prdcts$ = fetched_stuff });
  }

  openDialog_edit_name(): void {
    const dialogRef = this.dialog.open(EditNameDialog, {
      data: { edited_name: this.edited_name }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.edited_name = result;
    });
  }

  openDialog_edit_description(): void {
    const dialogRef = this.dialog.open(EditDescriptionDialog, {
      data: { edited_description: this.edited_description }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.edited_description = result;
    });
  }

  openDialog_edit_price(): void {
    const dialogRef = this.dialog.open(EditPriceDialog, {
      data: { edited_price: this.edited_price }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.edited_price = result;
    });
  }


}

@Component({
  selector: 'edit-name-dialog',
  templateUrl: 'edit-name-dialog.html',
})

export class EditNameDialog {

  constructor(
    public dialogRef: MatDialogRef<EditNameDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'edit-description-dialog',
  templateUrl: 'edit-description-dialog.html',
})

export class EditDescriptionDialog {

  constructor(
    public dialogRef: MatDialogRef<EditDescriptionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'edit-price-dialog',
  templateUrl: 'edit-price-dialog.html',
})

export class EditPriceDialog {

  constructor(
    public dialogRef: MatDialogRef<EditPriceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}