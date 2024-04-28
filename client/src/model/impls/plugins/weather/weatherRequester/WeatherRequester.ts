import { Forecast } from "../WeatherPlugins";

export interface WeatherRequester {
 requestWeatherForecast(): Forecast
}