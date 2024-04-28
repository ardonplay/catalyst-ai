import { AbstractPlugin } from "./AbstractPlugin"

export interface PluginService {
 addPlugin(p: AbstractPlugin): void
 removePlugin(p: AbstractPlugin): void
 findByName(p: string): AbstractPlugin
 getAllPluginDesriptions(): string
}