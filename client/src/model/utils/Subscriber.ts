import type { Configuration } from "./Configuration";
import type { TextMessage } from "./messages";

export type State = {
 history: TextMessage[]
 config: Configuration
}

export interface Subscriber {
 getName(): string;
 update(state: State): void;
}