export class Configuration {
  private static instance: Configuration | null = null;
  private properties: Map<string, string>

  private constructor() {
    this.properties = new Map<string, string>
  }

  public static getInstance(): Configuration {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration();
    }
    return Configuration.instance;
  }

  public addProperty(key: string, value: string) {
    return this.properties.set(key, value)
  }

  public removeProperty(key: string) {
    return this.properties.delete(key)
  }

  public getPropertyValue(key: string): string {
    return this.properties.get(key)
  }
}