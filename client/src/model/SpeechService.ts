import { AudioMessage, TextMessage } from "./utils/Messages"

export interface SpeechService {
 recognize(a: AudioMessage): TextMessage
 synthesize(t: TextMessage): AudioMessage
}