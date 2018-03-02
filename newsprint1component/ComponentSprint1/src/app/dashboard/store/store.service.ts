import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms'
@Injectable()

export class StoreService {
    result: any;

    constructor(private _http: Http) {
    }

    getProducts() {
        return this._http.get("http://localhost:3000/api/product/getProducts")
            .map(result => this.result = result.json().data);
    }

    deleteProduct(product) {
        console.log("delete products");
        let myParams = new URLSearchParams();
        myParams.append('ID', product.ID);
        return this._http.delete("http://localhost:3000/api/product/deleteProduct/" + product._id, {search: myParams}).map(res => res.json());
    }

    createProduct(product) {
        return this._http.post("http://localhost:3000/api/product/createProduct/", product).map(result => this.result = result.json().data);

    }
    updateProduct(p,product){
        console.log("update products");
        let myParams = new URLSearchParams();
        myParams.append('ID', product.ID);
        return this._http.patch("http://localhost:3000/api/product/updateProduct/"+ product._id, p).map(result => this.result = result.json().data);

    }
}
