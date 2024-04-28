import { Configuration } from "../../utils/Configuration";
import { SpeechRecognizer } from "./SpeechRecognizer";

export class SpeechRecognizerImpl implements SpeechRecognizer {
 private config: Configuration
 private language: string

 constructor() {
  this.config = Configuration.getInstance()
  this.language = this.config.getPropertyValue('lang')
 }

 recognize(a: any, lang?: string): string {
  return null
 }
}