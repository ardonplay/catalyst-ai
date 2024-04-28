export interface LLM {
 generate(query: string): Promise<string>
}