export class PluginArguments {
 private args: Map<string, string>

 public addArgument(arg: string, val: string) { this.args.set(arg, val) }
 public removeArgument(arg: string) { this.args.delete(arg) }
 public getArguments(): Map<string, string> { return this.args }
 public getArgument(arg: string): string { return this.args.get(arg) }
}