
export interface Forecast {
  Headline:       Headline;
  DailyForecasts: DailyForecast[];
}

export interface DailyForecast {
  Date:        string;
  EpochDate:   number;
  Temperature: Temperature;
  Day:         Day;
  Night:       Day;
  Sources:     string[];
  MobileLink:  string;
  Link:        string;
}

export interface Day {
  Icon:             number;
  IconPhrase:       string;
  HasPrecipitation: boolean;
  PrecipitationIntensity?: string;
  PrecipitationType?: string
}

export interface Temperature {
  Minimum: Imum;
  Maximum: Imum;
}

export interface Imum {
  Value:    number;
  Unit:     string;
  UnitType: number;
}

export interface Headline {
  EffectiveDate:      string;
  EffectiveEpochDate: number;
  Severity:           number;
  Text:               string;
  Category:           string;
  EndDate:            string;
  EndEpochDate:       number;
  MobileLink:         string;
  Link:               string;
}
