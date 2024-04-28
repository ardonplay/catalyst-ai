import { Configuration } from "../../../../utils/Configuration"
import { Forecast } from "../WeatherPlugins"
import { WeatherRequester } from "./WeatherRequester"

export class OpenWeatherApiRequester implements WeatherRequester {
 private configuration: Configuration
 private apiKey: string

 constructor () {
  this.configuration = Configuration.getInstance()
  this.apiKey = this.configuration.getPropertyValue('OPEN_WEATHER_API_KEY')
 }
 requestWeatherForecast(): Forecast {
  // implementation
  return null
 }
}