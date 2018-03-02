import { Component, OnInit } from '@angular/core';

import {StoreService} from './store.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
    products: Array<any>;
    newproduct: FormGroup;

    constructor(private _storeService: StoreService) {
        this._storeService.getProducts()
            .subscribe(res => this.products = res)

        this.newproduct = new FormGroup({
            Name: new FormControl(),
            Price: new FormControl(),
            SellerName: new FormControl()
        });
    }

    deleteProduct(product) {
        this._storeService.deleteProduct(product).subscribe((res: any) => {
            this._storeService.getProducts().subscribe(res => this.products = res)
        });
       }
     createProduct() {
         var p = {
             name: this.newproduct.value.Name,
             price: this.newproduct.value.Price,
             // sellerName: this.newproduct.value.SellerName
         };
         this._storeService.createProduct(p).subscribe((res: any) => {
             this._storeService.getProducts().subscribe(res => this.products = res)
         });
     }
    updateProduct(name,price,product) {
        var p = {
            name: name,
            price: price,
        };
        this._storeService.updateProduct(p,product).subscribe((res: any) => {
            this._storeService.getProducts().subscribe(res => this.products = res)
        });
     }
        ngOnInit()
        {
            {
            }
        }

    }