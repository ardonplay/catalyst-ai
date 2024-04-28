import { SpeechService } from "../../SpeechService"
import { AudioMessage, TextMessage } from "../../utils/Messages"
import { SpeechRecognizer } from "./SpeechRecognizer"
import { SpeechSynthesizer } from "./SpeechSynthesizer"

type SpeechServiceImplArgs = {
 recognizer: SpeechRecognizer
 synthesizer: SpeechSynthesizer
}

export class SpeechServiceImpl implements SpeechService {
 private recognizer: SpeechRecognizer
 private synthesizer: SpeechSynthesizer

 constructor(args: SpeechServiceImplArgs) {
  this.recognizer = args.recognizer
  this.synthesizer = args.synthesizer
 }

 recognize(a: AudioMessage): TextMessage {
  return new TextMessage(this.recognizer.recognize(a.getAudio()))
 }
 synthesize(t: TextMessage): AudioMessage {
  return new AudioMessage(this.synthesizer.synthesize(t.getText()))
 }
}