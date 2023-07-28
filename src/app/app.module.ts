import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptor } from './utils/interceptor';
import { WeatherService } from './main/services/weather.service';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './main/store/effects/city.effect';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app-reducer';

//cache APIs
import { NgHttpCachingModule, NgHttpCachingConfig, NgHttpCachingStrategy } from 'ng-http-caching';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const ngHttpCachingConfig: NgHttpCachingConfig = {
  //All get APIs are cached for 1 minute
  lifetime: 1000 * 60,
  allowedMethod: ['GET', 'HEAD'],
  cacheStrategy: NgHttpCachingStrategy.ALLOW_ALL,
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot(WeatherEffects),
    //cache APIs
    NgHttpCachingModule.forRoot(ngHttpCachingConfig)
  ],
  providers: [
    WeatherService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
