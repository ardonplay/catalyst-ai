import { AbstractPlugin } from "../../../AbstractPlugin"
import { TextMessage } from "../../../utils/Messages"
import { PluginArguments } from "../../../utils/PluginArguments"
import { OpenWeatherApiRequester } from "./weatherRequester/OpenWeatherApiRequester"

export class WeatherPlugin extends AbstractPlugin {

 private weatherRequester: OpenWeatherApiRequester
 
 constructor() {
  const title = "Weather Plugin"
  const description = "WeatherMaster is a versatile and user-friendly plugin designed to provide weather forecasts for any location worldwide. To work, he needs to know the place for forecasting `location` param"
  super(0, title, description)

  this.weatherRequester = new OpenWeatherApiRequester()
 }

 public execute(args: PluginArguments): TextMessage {
  const location = args.getArgument('location')

  const forecast = this.requestWeatherForecast()
  return new TextMessage(forecast.toString())
 }

 public requestWeatherForecast(): Forecast {
  return null
 }
}

export class Forecast {
 description: string
 temperature: number
 humidity: number
 windSpeed: number

 toString(): string {
  return `Forecast: 
  Description: ${this.description}
  Temperature: ${this.temperature}°C
  Humidity: ${this.humidity}%
  Wind Speed: ${this.windSpeed} km/h`;
 }
}