import { Configuration } from "../../utils/Configuration";
import { LLM } from "./LLM";
export class LLMImpl implements LLM {
  private config: Configuration;
  private model: string;

  constructor() {
    this.config = Configuration.getInstance();
    this.model = this.config.getPropertyValue("model");
  }

  public async generate(query: string): Promise<string> {
    return fetch("http://localhost:8000/generate_text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text: query}),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  }
}
