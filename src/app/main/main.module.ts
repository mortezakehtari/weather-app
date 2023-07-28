import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherViewComponent } from './components/weather-view/weather-view.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { MainRoutingModule } from './main.routing';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { WeatherService } from './services/weather.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/effects/city.effect';

@NgModule({
  declarations: [
    WeatherViewComponent,
    WeatherSearchComponent,
    HeaderComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    SharedModule,
    MatAutocompleteModule,
  ],
  providers:[WeatherService]
})
export class MainModule { }
