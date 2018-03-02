import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { StoreRoutingModule } from './store-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreComponent } from './store.component';
import { StoreService } from './store.service';

import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [ThemeModule, StoreRoutingModule,  FormsModule, ReactiveFormsModule],
  declarations: [StoreComponent],
  entryComponents: [],
  providers: [StoreService]
})
export class StoreModule {}
