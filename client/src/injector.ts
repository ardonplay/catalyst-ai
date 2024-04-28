import { Controller } from "./model/Controller"
import { LlmServiceImpl } from "./model/impls/LlmServiceImpl"
import { PluginServiceImpl } from "./model/impls/PluginServiceImpl"
import { LLMImpl } from "./model/impls/llm/LlmImpl"
import { SpeechRecognizerImpl } from "./model/impls/speech/SpeechRecognizerImpl"
import { SpeechServiceImpl } from "./model/impls/speech/SpeechServiceImpl"
import { SpeechSynthesizerImpl } from "./model/impls/speech/SpeechSynthesizerImpl"

export const getController = () => {

 const pluginService = new PluginServiceImpl()

 const llm = new LLMImpl()
 const llmService = new LlmServiceImpl({ llm })

 const recognizer = new SpeechRecognizerImpl()
 const synthesizer = new SpeechSynthesizerImpl()
 const speechService = new SpeechServiceImpl({ recognizer, synthesizer })

 const controller = new Controller({ speechService, pluginService, llmService })

 return controller
}