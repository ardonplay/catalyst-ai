import { LlmService } from "./LlmService"
import { PluginService } from "./PluginService"
import { SpeechService } from "./SpeechService"
import { Configuration } from "./utils/Configuration"
import { AudioMessage, TextMessage } from "./utils/Messages"
import { State, Subscriber } from "./utils/Subscriber"


export class Controller {
 private history: TextMessage[]
 private configuration: Configuration
 private pluginService: PluginService
 private speechService: SpeechService
 private llmService: LlmService
 private subscribers: Subscriber[]

 constructor(args: ControllerArgs) {
  // load configuration first
  this.configuration = this.loadConfiguration()
  this.llmService = args.llmService
  this.pluginService = args.pluginService
  this.speechService = args.speechService
  this.history = []
  this.subscribers = []
 }

 public subscribe(subscriber: Subscriber) {
  const filterd = this.subscribers.filter(s => s.getName() !== subscriber.getName())
  this.subscribers = [...filterd, subscriber]
 }

 public async processTextMessage(message: TextMessage): Promise<TextMessage> {
  //  const message = this.speechService.recognize(audioMessage)
  //  if recognition were supported...


  // all plugins description + user query
  const description = new TextMessage(this.pluginService.getAllPluginDesriptions())
  description.add(message.getText())

  // ask llm for suitable plugin
  const plugin = this.llmService.findMostSuitablePlugin(description)

  if (plugin) {
   // if that plugin founded parse arguments from user query
   const args = this.llmService.getPluginArgumentsFromMessage(message)
   // call plugin 
   const result = plugin.execute(args)

   message.add(result.getText())
  }

  // add user query to history
  const answer = await this.llmService.generate(message)

  // to keep order
  this.history = [...this.history, message, answer]

  this.notifySubscribers() // updated compoenents state, trigger rerender
  return answer
 }


 public notifySubscribers(): void {
  for (const sub of this.subscribers) {
   sub.update(this.getState())
  }
 }

 private loadConfiguration(): Configuration {
  const config = Configuration.getInstance()
  // additional configuration
  config.addProperty('nickname', '')
  config.addProperty('prompt', '')

  return config
 }

 public getConfiguration(): Configuration {
  return this.configuration
 }

 public getState(): State {
  return { history: [...this.history], config: this.configuration }
 }

 public getHistory() {
  return this.history
 }
}

type ControllerArgs = {
 pluginService: PluginService
 speechService: SpeechService
 llmService: LlmService
}