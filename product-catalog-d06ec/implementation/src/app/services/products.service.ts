
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })

export class ProductsService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<JSON> {
        return this.http
            .get<JSON>("https://xxx-xxxx.yy.yy-zzzz-z.amazonaws.com/products.json")
    }

}