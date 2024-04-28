import { Configuration } from "./utils/Configuration"
import { TextMessage } from "./utils/Messages"
import { PluginArguments } from "./utils/PluginArguments"

export abstract class AbstractPlugin {

 protected id: number
 protected title: string
 protected description: string
 protected configuration: Configuration
 
 constructor (id: number, title: string, description: string) {
  this.id = id
  this.title = title
  this.description = description
  this.configuration = Configuration.getInstance()
 }

 public execute(a: PluginArguments): TextMessage { return null }
 public getDescription(): string { return this.description }
 public getId(): number { return this.id }
 public getTitle(): string { return this.title }
}