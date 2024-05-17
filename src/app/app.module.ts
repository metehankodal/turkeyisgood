import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MedTravelComponent } from './pages/med-travel/med-travel.component';
// Import library module





@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    SearchComponent,
    MedTravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSelectModule,
    MatExpansionModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
