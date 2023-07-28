import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppReducer from '../../../store/app-reducer';
import { Forecast } from '../../models/forecast.model';
import { Observable, map } from 'rxjs';
import { City } from '../../models/location.model';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent {

   sampleWeather: Forecast = {
    "Headline": {
        "EffectiveDate": "2023-07-28T14:00:00+01:00",
        "EffectiveEpochDate": 1690549200,
        "Severity": 5,
        "Text": "Expect showers Friday afternoon",
        "Category": "rain",
        "EndDate": "2023-07-28T20:00:00+01:00",
        "EndEpochDate": 1690570800,
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2023-07-28T07:00:00+01:00",
            "EpochDate": 1690524000,
            "Temperature": {
                "Minimum": {
                    "Value": 60.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 73.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 13,
                "IconPhrase": "Mostly cloudy w/ showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 12,
                "IconPhrase": "Showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us"
        },
        {
            "Date": "2023-07-29T07:00:00+01:00",
            "EpochDate": 1690610400,
            "Temperature": {
                "Minimum": {
                    "Value": 57.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 72.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 14,
                "IconPhrase": "Partly sunny w/ showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us"
        },
        {
            "Date": "2023-07-30T07:00:00+01:00",
            "EpochDate": 1690696800,
            "Temperature": {
                "Minimum": {
                    "Value": 61.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 68.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 13,
                "IconPhrase": "Mostly cloudy w/ showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 12,
                "IconPhrase": "Showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us"
        },
        {
            "Date": "2023-07-31T07:00:00+01:00",
            "EpochDate": 1690783200,
            "Temperature": {
                "Minimum": {
                    "Value": 58.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 71.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 18,
                "IconPhrase": "Rain",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us"
        },
        {
            "Date": "2023-08-01T07:00:00+01:00",
            "EpochDate": 1690869600,
            "Temperature": {
                "Minimum": {
                    "Value": 57.0,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 69.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 18,
                "IconPhrase": "Rain",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us",
            "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us"
        }
    ]
}
  constructor(private store: Store<AppReducer.AppState>){}
  forecast: Observable<Forecast | null> = this.store.select('forecast').pipe(map(item => item.forecast));
  loading: Observable<boolean> = this.store.select('forecast').pipe(map(item => item.loading));
  city: Observable<City | null> = this.store.select('city').pipe(map(item => item.selectedCity))
}
