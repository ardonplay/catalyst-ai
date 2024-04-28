import { AbstractPlugin } from "./AbstractPlugin"
import { TextMessage } from "./utils/Messages"
import { PluginArguments } from "./utils/PluginArguments"

export interface LlmService {
 generate(a: TextMessage): Promise<TextMessage>
 findMostSuitablePlugin(description: TextMessage): AbstractPlugin | undefined
 getPluginArgumentsFromMessage(message: TextMessage): PluginArguments
}