import { AbstractPlugin } from "../AbstractPlugin"
import { LlmService } from "../LlmService"
import { Configuration } from "../utils/Configuration"
import { TextMessage } from "../utils/Messages"
import { PluginArguments } from "../utils/PluginArguments"
import { LLM } from "./llm/LLM"

type LlmServiceImplArgs = {
 llm: LLM
}

export class LlmServiceImpl implements LlmService {

 private config: Configuration
 private llm: LLM

 constructor(args: LlmServiceImplArgs) {
  this.llm = args.llm
  this.config = Configuration.getInstance()
 }

 async generate(a: TextMessage): Promise<TextMessage> {
  return new TextMessage(await this.llm.generate(a.getText()))
 }
 findMostSuitablePlugin(description: TextMessage): AbstractPlugin | undefined {
  return undefined;
 }
 getPluginArgumentsFromMessage(message: TextMessage): PluginArguments {
  throw undefined;
 }
}