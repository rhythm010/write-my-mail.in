import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {AngularMaterialModule} from './angular-material/angular-material.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule, AngularMaterialModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
