import { AbstractPlugin } from "../AbstractPlugin"
import { PluginService } from "../PluginService"
import { Configuration } from "../utils/Configuration"

export class PluginServiceImpl implements PluginService {
 private plugins: AbstractPlugin[]
 private config: Configuration

 constructor() {
  this.config = Configuration.getInstance()
  this.plugins = []
 }

 addPlugin(p: AbstractPlugin) {
  const filtered = this.plugins.filter(plug => plug.getId() !== p.getId())
  this.plugins = [...filtered, p]
 }
 removePlugin(p: AbstractPlugin): void {
  const filtered = this.plugins.filter(plug => plug.getId() !== p.getId())
  this.plugins = [...filtered]
 }
 findByName(p: string): AbstractPlugin {
  return this.plugins.find(plug => plug.getTitle() === p)
 }
 getAllPluginDesriptions(): string {
  return this.plugins.map(p => p.getDescription()).reduce((prev, curr) => `${prev}\n${curr}`, '')
 }
}

